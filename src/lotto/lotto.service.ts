import {Injectable} from "@nestjs/common";
import {getLastDrawNo, getLottos, insertDraw} from '../database/lottoDaos';
import axios from 'axios';

@Injectable({})
export class LottoService {
  async update() {
    const lastDrawNo = await getLastDrawNo();
    console.log(lastDrawNo[0].lastDrawNo);
    let count = 1;
    
    while (true) {
      const drawData = await this.fetchDraw(lastDrawNo[0].lastDrawNo + count);
      if (drawData.returnValue === 'fail') {
        break;
      }
      count++;
      const {
        drwtNo1,
        drwtNo2,
        drwtNo3,
        drwtNo4,
        drwtNo5,
        drwtNo6,
        bnusNo,
        drwNoDate,
      } = drawData;
      
      const [year, month, date] = drwNoDate.split('-');
      console.log(drwtNo1, drwtNo2, drwtNo3, drwtNo4, drwtNo5, drwtNo6, bnusNo, year, month, date)
      const insertResult = await insertDraw(drwtNo1, drwtNo2, drwtNo3, drwtNo4, drwtNo5, drwtNo6, bnusNo, year, month, date);
      console.log(insertResult);
    }
    
    return {
      message: "signup2"
    }
  }
  
  async fetchDraw(drawNo: number) {
    try {
      const drawData = (await axios.get(
        `https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=${drawNo}`
      )).data;
      return drawData;
    } catch(err) {
      console.log(err);
    }
  }
}