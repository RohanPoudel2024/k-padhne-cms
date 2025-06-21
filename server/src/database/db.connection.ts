import {Sequelize} from 'sequelize'
import { dbConfig } from '../config/Config'

const sequelize = new Sequelize({
    database:dbConfig.DB_NAME,
    username:dbConfig.USERNAME,
    password:dbConfig.PASSWORD,
    host:dbConfig.HOST,
    dialect: 'mysql',
    port:Number(dbConfig.PORT)
})

sequelize.authenticate()
.then(()=>{
    console.log('DB Connected')
})
.catch((e)=>{
    console.log('DB Connection Failed',e)
})

export default sequelize

