import User from "../domain/entities/user.entity";
import "reflect-metadata"

import MySqlInscriptosImpDatasource from "../infrastructure/datasources/mysql.sequalize.inscriptsImp.datasource";
import UserRepository from "../infrastructure/repositories/user.repository";
import { AppDataSource } from "../infrastructure/datasources/db/mysql.connection";
import { UserModel } from "../infrastructure/models/user.model";
import { log } from "console";



//Configura middlewares globales y la inicialización general
console.log("Hola mundo");


    // agregar un user de prueba
    const user:User = new User(
      'John',
      'Doe',
      '123456789',
      'santozzi@gmail.com',
      '12345678',
      "1234"
    );
      /* const userRepository:UserRepository = new UserRepository(new MySqlInscriptosImpDatasource());
      userRepository.addUser(user).then((user:User) => {
          console.log(user);
      }).catch((error:Error) => {
          console.log(error);
      }); */

 const userRepository:UserRepository = new UserRepository(new MySqlInscriptosImpDatasource());
 const startApp = async () => {
  try {
    // Inicializa la conexión
    await AppDataSource.initialize();
    console.log('Conexión a la base de datos establecida correctamente.');

    
  } catch (error) {
    console.error('Error al conectar con la base de datos:', error); 
  }
};

startApp(); 
userRepository.addUser(user).then((usuario:User) => {
  console.log(usuario);
}).catch((error:Error) => {
  console.log(error);
});

