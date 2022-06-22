import {Controller, Get} from "@nestjs/common";
import {LottoService} from "./lotto.service";

@Controller('lotto')
export class LottoController {
  constructor(private lottoService: LottoService) {}
  
  @Get('get')
  signup() {
    return this.lottoService.update();
  }
}