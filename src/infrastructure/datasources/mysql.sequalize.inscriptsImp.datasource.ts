import UserDataSource from "../../domain/datasources/user.datasource";
import User from "../../domain/entities/user.entity";
import { userModelToUser, userToUserModel } from "../mappers/user.mapper";
import { UserModel } from "../models/user.model";
import DataSourceSingle from "./db/mysql.connection";




class MySqlInscriptosImpDatasource implements UserDataSource{
    datasource = DataSourceSingle.getInstance();
    userRepository = this.datasource.getRepository(UserModel);
    
    
    
   
      
          // Ejemplo: Crear un nuevo usuario
          




    getUserByEmail(email: string): Promise<User> {
         throw new Error("Method not implemented.");

    }
    getUserByDni (dni: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    async addUser (inscripto: User): Promise<User> {
        const newUser = this.userRepository.create(userToUserModel(inscripto));
      
        const user = await this.userRepository.save(newUser);
        console.log('Nuevo usuario creado:', newUser);
        return userModelToUser(user);
    }
    deleteUser(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    updateUser(inscripto: User): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getUsers(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
    getUserById(id: number): Promise<User> {
        throw new Error("Method not implemented.");
    }

    
}
export default MySqlInscriptosImpDatasource;