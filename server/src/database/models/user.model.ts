import {Table,Column,Model,DataType, PrimaryKey, HasMany} from "sequelize-typescript"
import Content from "./content.model";
import Category from "./category.model";

@Table({
    tableName: 'users',
    modelName: 'User', 
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

    @HasMany(() => Content, 'authorId')
    declare contents: Content[];

    @HasMany(() => Category, 'createdBy')
    declare categories: Category[];
}


export default User;