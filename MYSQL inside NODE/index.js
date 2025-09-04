import { faker } from "@faker-js/faker";
import mysql from "mysql2";

function getRandomUser() {
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}

// console.log(getRandomUser());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "testdb_node",
});

//test creating table,Now commented to re-run to prevent err,Generally,sql statements are deleted after executed
//  try{
//     connection.query("CREATE TABLE Users(id int primary key,name varchar(20))",(err,result)=>{
//     if(err){
//       throw err;
//     }
//     console.log(result)
//    })
//  }catch(err){
//   console.log(err)
//  }

// //Inserting single user
// try {
//   connection.query(
//     `INSERT INTO Users (id,name) VALUES (1,'Aqib'),(2,'Abdullah'),(3,'Ali'),(4,'Manan')`,
//     (err, result) => {
//       if (err) {
//         throw err;
//       }
//       console.log(result);
//     }
//   );
// } catch (err) {
//   console.log(err);
// }

//getting data from database
// let users = [];
// try {
//   connection.query("SELECT * From Users", (err, result) => {
//     if (err) throw err;
//     users = result; // directly assign result instead of pushing
//     console.log(users); // move console.log here to see results
//   });
// } catch (err) {
//   console.log(err);
// }
