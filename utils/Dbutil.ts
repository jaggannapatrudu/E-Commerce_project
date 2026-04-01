import sql from 'mssql';
export default class DataBase
{

 config: sql.config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME,
  options: {
    encrypt: true, // required for Azure
    trustServerCertificate: true // for local/dev
  }
};

    private connection:any
   
     async dbconnection()
     {
        await sql.connect(this.config)
     }

}