import {readData, saveData} from "./connection";

export async function getLottos() {
  return readData(`select * from results`);
}

export async function getLastDrawNo() {
  return readData(`select MAX(id) as lastDrawNo from results`);
}

export async function insertDraw(
  fir: number, sec: number, thi: number, fou: number, fif: number, six: number, bonus: number, year: number, month: number, date: number
) {
  return saveData(`
    insert into results(fir, sec, thi, fou, fif, six, bonus, year, month, date)
    values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [fir, sec, thi, fou, fif, six, bonus, year, month, date])
}