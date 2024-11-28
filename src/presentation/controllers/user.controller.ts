import User from "../../domain/entities/user.entity";
import { Request, Response } from 'express';
import UserMysqlTypeormImpDatasource from "../../infrastructure/datasources/userMysqlTypeormImp.datasource";
import { UserModel } from "../../infrastructure/models/user.model";
import UserRepository from "../../infrastructure/repositories/user.repository";

interface UserInterface  {
    id?: number;
    name?: string;
    lastName?: string;
    dni?:string;
    email?: string;
    phone?: string;
    password?:string;
    createdAt?: Date;
    updatedAt?: Date;
}

const userRepository = new UserRepository(new UserMysqlTypeormImpDatasource());




export async function createUser(req: Request, res: Response) {

    const {name, lastName, dni, email,password,phone}:UserInterface = req.body;
    
/* 
    const user: UserModel = req.body;
    try {
        const userCreated = await userService.createUser(user);
        res.status(201).json(userCreated);
    } catch (error) {
        res.status(500).json({ message: error.message });
    } */
}