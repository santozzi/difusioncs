import User from "../../domain/entities/user.entity";
import { Request, Response } from "express";
import UserMysqlTypeormImpDatasource from "../../infrastructure/datasources/userMysqlTypeormImp.datasource";
import { UserModel } from "../../infrastructure/models/user.model";
import UserRepository from "../../infrastructure/repositories/user.repository";

interface UserInterface {
  name?: string;
  lastName?: string;
  dni?: string;
  email?: string;
  phone?: string;
  password?: string;
}

const userRepository = new UserRepository(new UserMysqlTypeormImpDatasource());

export const createUser = async (req: Request, res: Response) => {
  console.log(req.body);

  const { name, lastName, dni, email, password, phone } =
    req.body as UserInterface;

  try {
    if (!name || !lastName || !dni || !email || !password || !phone) {
      res.status(400).json({ message: "All fields are required" });
    } else {
      const user = new User(name, lastName, dni, email, password, phone);

      const userCreated = await userRepository.addUser(user);
      await sendToDifusion(user);

      res.status(201).json(userCreated);
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
};
interface confirmUserInterface {
    cookie?: string;
    realname?: string;
    languge?: string;
    }

export const confirmUser = async (req: Request, res: Response) => {
   
  
    const { cookie, realname, languge} = req.body as confirmUserInterface;
  
    try {
      console.log(req.body);
      
     
      if (!cookie) {
        res.status(400).json({ message: "All fields are required" });
      } else {
        
            
        await sendToDifusionFinish(realname,cookie);
  
        res.status(201).json({message:"confirmado"});
      }
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      }
    }
  };




const sendToDifusion = async (user: User) => {
  try {
    const formData = new FormData();
    formData.append("email", user.email);
    formData.append("fullname", `${user.name} ${user.lastName}`);
    formData.append("pw", user.password);
    formData.append("pw-conf", user.password);
    formData.append("language", "es");

    const response = await fetch(
      "https://listas.uns.edu.ar/subscribe/difusiondcs/",
      {
        method: "POST",
       
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }

    // Analiza la respuesta como JSON

    console.log(response);
  } catch (error) {
    console.error("Error al realizar la solicitud:", error);
    throw error; // Relanza el error para manejarlo en otro lugar si es necesario
  }
};

const sendToDifusionFinish = async (realname:string = "",clave:string) => {
    try {
      const formData = new FormData();
      
      formData.append("realname", realname);
      formData.append("cookie", clave);
      formData.append("language", "es");
      formData.append("submit", "Subscribirse a la lista Difusiondcs");
  
      const response = await fetch(
        "https://listas.uns.edu.ar/confirm/difusiondcs/",
        {
          method: "POST",
         
          body: formData,
        }
      );
  
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.statusText}`);
      }
  
      // Analiza la respuesta como JSON
  
      console.log();
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
      throw error; // Relanza el error para manejarlo en otro lugar si es necesario
    }
  };

/* 
    const user: UserModel = req.body;
    try {
        const userCreated = await userService.createUser(user);
        res.status(201).json(userCreated);
    } catch (error) {
        res.status(500).json({ message: error.message });
    } */
