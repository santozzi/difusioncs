import UserDataSource from "../../domain/datasources/user.datasource";
import User from "../../domain/entities/user.entity";
import { UserRepository as UserRepositoryDom } from "../../domain/repositories/user.repository";
class UserRepository implements UserRepositoryDom{
    userDataSource: UserDataSource;
    constructor(userDataSource: UserDataSource){
        this.userDataSource = userDataSource;
    }
    getUsers(): Promise<User[]> {
        return this.userDataSource.getUsers();
    }
    getUserById(id: number): Promise<User> {
        return this.userDataSource.getUserById(id);
    }
    getUserByEmail(email: string): Promise<User> {
        return this.userDataSource.getUserByEmail(email);
    }
    getUserByDni(dni: string): Promise<User> {
        return this.userDataSource.getUserByDni(dni);
    }
    addUser(inscripto: User): Promise<User> {

    
        return this.userDataSource.addUser(inscripto);
    }
    deleteUser(id: number): Promise<void> {
        return this.userDataSource.deleteUser(id);
    }
    updateUser(inscripto: User): Promise<void> {
        return this.userDataSource.updateUser(inscripto);
    }

}
export default UserRepository;