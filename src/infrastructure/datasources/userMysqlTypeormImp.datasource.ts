import UserDataSource from "../../domain/datasources/user.datasource";
import User from "../../domain/entities/user.entity";
import { userModelToUser, userToUserModel } from "../mappers/user.mapper";
import { UserModel } from "../models/user.model";
import DataSourceSingle from "./db/mysql.connection";

class UserMysqlTypeormImpDatasource implements UserDataSource {
  datasource = DataSourceSingle.getInstance();
  userRepository = this.datasource.getRepository(UserModel);

  // Ejemplo: Crear un nuevo usuario

  getUsers(): Promise<User[]> {
    throw new Error("Method not implemented.");
  }
  getUserById(id: number): Promise<User> {
    throw new Error("Method not implemented.");
  }
  async updateUserByDni(dni: string, user: User): Promise<void> {
    
    const usuario = await this.userRepository.findOne({ where: { dni } });
    if (!usuario) {
      throw new Error("User not found");
    }

    await this.userRepository.update(usuario.getId(), userToUserModel(user));
  }

  getUserByEmail(email: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
  getUserByDni(dni: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
  async addUser(inscripto: User): Promise<User> {
    const newUser = this.userRepository.create(userToUserModel(inscripto));
    const user = await this.userRepository.save(newUser);
    return userModelToUser(user);
  }

  deleteUser(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async updateUser(inscripto: User): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
export default UserMysqlTypeormImpDatasource;
