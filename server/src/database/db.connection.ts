import {Sequelize} from 'sequelize-typescript'
import { dbConfig } from '../config/Config'

const sequelize = new Sequelize({
    database:dbConfig.DB_NAME,
    username:dbConfig.USERNAME,
    password:dbConfig.PASSWORD,
    host:dbConfig.HOST,
    dialect: 'mysql',
    port:Number(dbConfig.PORT),
    models:[__dirname+'/models']
})

sequelize.authenticate()
.then(()=>{
    console.log('DB Connected')
})
.catch((e)=>{
    console.log('DB Connection Failed',e)
})


//migration
const migrateDb = ()=>{
    try{
        sequelize.sync({
            force:true
        })
        console.log('DB Migrated')
    }catch(error){
        console.log('Error in migration',error)
    }
}

migrateDb()

export default sequelize

