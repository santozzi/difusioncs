
import User from "../entities/user.entity";
interface UserDataSource {
    getUsers(): Promise<User[]>;
    getUserById(id: number): Promise<User>;
    getUserByEmail(email: string): Promise<User>;
    getUserByDni(dni: string): Promise<User>;
    addUser(inscripto: User): Promise<User>;
    deleteUser(id: number): Promise<void>;
    updateUser(inscripto: User): Promise<void>;
    updateUserByDni(dni: string,user:User): Promise<void>;
}
export default UserDataSource;