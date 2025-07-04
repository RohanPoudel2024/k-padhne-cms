import {Table,Column,Model,DataType, PrimaryKey} from "sequelize-typescript"

@Table({
    tableName: 'users',//ui ma dekhine naam
    modelName: 'User', //for query
    timestamps: true
})

class User extends Model{
    //"@"
    @Column({
        primaryKey:true,
        type:DataType.UUID,
        defaultValue:DataType.UUIDV4
    })
    declare id : string

    @Column({
        type:DataType.STRING
    })
    declare username : string
    @Column({
        type:DataType.STRING
    })
    declare password : string
    @Column({
        type:DataType.STRING
    })
    declare email : string;
    @Column({
        type:DataType.ENUM('institute','teacher','super-admin','admin','student'),
        defaultValue: 'student'
    })
    declare role:string
}


export default User;