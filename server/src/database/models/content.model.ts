import { Table, Column, Model, DataType, ForeignKey, BelongsTo, BelongsToMany } from "sequelize-typescript";
import User from "./user.model";
import Category from "./category.model";
import ContentCategory from "./content-category.model";

@Table({
    tableName: 'contents',
    modelName: 'Content',
    timestamps: true
})

class Content extends Model {
    @Column({
        primaryKey: true,
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4
    })
    declare id: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        validate: {
            len: [1, 255]
        }
    })
    declare title: string;

    @Column({
        type: DataType.TEXT,
        allowNull: false,
        validate: {
            len: [1, 10000]
        }
    })
    declare body: string;

    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    declare excerpt: string;

    @Column({
        type: DataType.ENUM('draft', 'published', 'archived'),
        defaultValue: 'draft'
    })
    declare status: string;

    @Column({
        type: DataType.ENUM('post', 'page', 'announcement', 'assignment'),
        defaultValue: 'post'
    })
    declare type: string;

    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    declare featuredImage: string;

    @Column({
        type: DataType.JSON,
        allowNull: true
    })
    declare metadata: object;

    @ForeignKey(() => User)
    @Column({
        type: DataType.UUID,
        allowNull: false
    })
    declare authorId: string;

    @BelongsTo(() => User)
    declare author: User;

    @BelongsToMany(() => Category, () => ContentCategory)
    declare categories: Category[];

    @Column({
        type: DataType.DATE,
        allowNull: true
    })
    declare publishedAt: Date;

    @Column({
        type: DataType.INTEGER,
        defaultValue: 0
    })
    declare viewCount: number;

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: true
    })
    declare isActive: boolean;
}

export default Content;
