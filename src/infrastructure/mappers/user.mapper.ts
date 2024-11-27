import User from "../../domain/entities/user.entity";
import { UserModel } from "../models/user.model";

export const userToUserModel = (user:User):UserModel => {
    return  new UserModel(
        user.name,
        user.lastName,
        user.dni,
        user.email,
        user.password,
        user.phone
    );

}
export const userModelToUser = (userModel:UserModel):User => {
    return  new User(
        userModel.getName(),
        userModel.getLastName(),
        userModel.getDni(),
        userModel.getEmail(),
        userModel.getPhone(),
        userModel.getPassword(),
        userModel.getId(),
        userModel.getCreatedAt(),
        userModel.getUpdatedAt()
    );
}