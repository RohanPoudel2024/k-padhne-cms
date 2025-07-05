import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany, BelongsToMany } from "sequelize-typescript";
import User from "./user.model";
import Content from "./content.model";
import ContentCategory from "./content-category.model";

@Table({
    tableName: 'categories',
    modelName: 'Category',
    timestamps: true,
    indexes: [
        { fields: ['slug'], unique: true },
        { fields: ['parentId'] },
        { fields: ['createdBy'] },
        { fields: ['isActive'] }
    ]
})

class Category extends Model {
    @Column({
        primaryKey: true,
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4
    })
    declare id: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true
    })
    declare name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true
    })
    declare slug: string;

    @Column({
        type: DataType.TEXT,
        allowNull: true
    })
    declare description: string;

    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    declare color: string;

    @ForeignKey(() => Category)
    @Column({
        type: DataType.UUID,
        allowNull: true
    })
    declare parentId: string;

    @BelongsTo(() => Category)
    declare parent: Category;

    @HasMany(() => Category)
    declare children: Category[];

    @ForeignKey(() => User)
    @Column({
        type: DataType.UUID,
        allowNull: false
    })
    declare createdBy: string;

    @BelongsTo(() => User)
    declare creator: User;

    @BelongsToMany(() => Content, () => ContentCategory)
    declare contents: Content[];

    @Column({
        type: DataType.INTEGER,
        defaultValue: 0
    })
    declare sortOrder: number;

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: true
    })
    declare isActive: boolean;
}

export default Category;
