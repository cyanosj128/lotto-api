import {createPool} from 'mysql2';
import {dbConfig} from "../config";

const pool = createPool(dbConfig);

async function readData(query: string, args?: any | any[]) {
  const promisePool = pool.promise();
  try {
    const [rows] = await promisePool.query(query, args);
    return rows;
  } catch (err) {
    console.log(err);
  }
}

async function saveData(query: string, args?: any | any[]) {
  const promisePool = pool.promise();
  try {
    const [rows] = await promisePool.execute(query, args);
    return rows;
  } catch (err) {
    console.log(err);
  }
}

export { readData, saveData };




