import 'reflect-metadata';
import { DataSource } from 'typeorm';


class DataSourceSingle  extends DataSource{
  private static instance: DataSourceSingle;
  private constructor(){
    super({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username:'root',
      password: 'Dcs0132$$',
      database: 'difusiones',
      entities: ['src/infrastructure/models/*.ts'],
    });
  }
  public static getInstance(): DataSourceSingle{
    if(!DataSourceSingle.instance){
      DataSourceSingle.instance = new DataSourceSingle();
    }
    return DataSourceSingle.instance;
  }
}
export default DataSourceSingle;



