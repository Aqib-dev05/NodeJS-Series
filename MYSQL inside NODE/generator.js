import { faker } from "@faker-js/faker";
import fs from "fs";
import path from "path";

  let seqId=1;

  function sequentialIds(){
      return  seqId++
  }

function getRandomUser() {
  return {
    _id: sequentialIds(),
    name: faker.internet.username(),
    age: faker.number.int({ min: 18, max: 70 }),
    gender: faker.person.gender(),
    skinTone: faker.color.human(),
    email: faker.internet.email(),
    car: faker.vehicle.type(),
  };
}
const users = [];
for (let i = 0; i < 3000; i++) {
  users.push(getRandomUser());
}
fs.writeFileSync(
  path.join(import.meta.dirname, "faker.json"),
  JSON.stringify(users, null, 2)
);
