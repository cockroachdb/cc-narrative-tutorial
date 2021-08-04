import "reflect-metadata";
import { createConnection } from "typeorm";
import { Locker } from "./entity/Locker";

async function insertLocker(repository, id: number, balance: number, color: string) {
  
  let locker = new Locker();
  locker.id = id;
  locker.balance = balance;
  locker.color = color;

  await repository.save(locker);

  console.log(`Collected ${balance} ${color} Shime Stones.`);
}


createConnection()
  .then(async (connection) => {
    const lockerRepository = await connection.getRepository(Locker);

    await insertLocker(lockerRepository, 1, 1000, 'blue');
    await insertLocker(lockerRepository, 2, 250, 'green');
    await insertLocker(lockerRepository, 3, 400, 'red');
    
  })
  .catch((error) => console.log(error));
