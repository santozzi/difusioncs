//importar de typeorm
import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BaseEntity} from 'typeorm';

@Entity('users')
export class UserModel{
  @PrimaryGeneratedColumn()  
  private id: number;

  @Column()
  public name: string;

  @Column({name: 'last_name',type:'varchar'})
  private lastName: string;
  @Column()
 private  dni: string;

  @Column()
  private email: string;

  @Column()
  private  phone: string;
  @Column()
  private password: string;
  @CreateDateColumn({name: 'created_at'})
  private readonly createdAt?: Date

  @UpdateDateColumn({name: 'updated_at'})
  private readonly updatedAt?: Date

  constructor(name: string, lastName: string, dni: string, email: string, phone: string, password: string, id: number = 0, createdAt: Date = new Date(), updatedAt: Date = new Date()) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.dni = dni;
    this.email = email;
    this.phone = phone;
    this.password = password;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
  //getters y setters
    public getId(): number {
        return this.id;
    }
    public setId(id: number): void {
        this.id = id;
    }
    public getName(): string {
        return this.name;
    }
    public setName(name: string): void {
        this.name = name;
    }
    public getLastName(): string {
        return this.lastName;
    }
    public setLastName(lastName: string): void {
        this.lastName = lastName;
    }
    public getDni(): string {
        return this.dni;
    }
    public setDni(dni: string): void {
        this.dni = dni;
    }
    public getEmail(): string {
        return this.email;
    }
    public setEmail(email: string): void {
        this.email = email;
    }
    public getPhone(): string {
        return this.phone;
    }
    public setPhone(phone: string): void {
        this.phone = phone;
    }
    public getPassword(): string {
        return this.password;
    }
    public setPassword(password: string): void {
        this.password = password;
    }
    public getCreatedAt(): Date {
        if (this.createdAt === undefined) {
            return new Date();
        }
        return this.createdAt;
    }
    public getUpdatedAt(): Date {
        if (this.updatedAt === undefined) {
            return new Date();
        }
        return this.updatedAt;
    }


  
   
} 
