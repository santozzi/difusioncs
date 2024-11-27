

class User  {
    id?: number;
    name: string;
    lastName: string;
    dni:string;
    email: string;
    phone: string;
    password:string;
    createdAt?: Date;
    updatedAt?: Date;

    constructor(nombre: string, apellido: string, dni:string, email: string, telefono: string,password:string, id: number = 0, createdAt: Date = new Date(), updatedAt: Date = new Date()){ {
        this.id = id;
        this.name = nombre;
        this.lastName = apellido;
        this.dni = dni;
        this.email = email;
        this.phone = telefono;
        this.password = password;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;

      
    }
}
}
export default User;
