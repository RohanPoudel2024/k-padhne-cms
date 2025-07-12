import { Table, Column, Model, DataType, ForeignKey, BelongsTo, BelongsToMany } from "sequelize-typescript";
import User from "./user.model";
import Category from "./category.model";
import ContentCategory from "./content-category.model";

@Table({
    tableName: 'contents',
    modelName: 'Content',
    timestamps: true,
    indexes: [
        { fields: ['status'] },
        { fields: ['type'] },
        { fields: ['authorId'] },
        { fields: ['publishedAt'] },
        { fields: ['status', 'type'] },
        { fields: ['authorId', 'status'] }
    ]
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

    @Column({
        type: DataType.STRING,
        allowNull: true,
        validate: {
            len: [0, 500]
        }
    })
    declare summary: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: true,
        comment: 'Estimated reading time in minutes'
    })
    declare readingTime: number;

    @Column({
        type: DataType.STRING,
        allowNull: true,
        comment: 'Language code (e.g., en, fr, np)'
    })
    declare language: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: true,
        comment: 'Total word count of the content'
    })
    declare wordCount: number;

    @Column({
        type: DataType.STRING,
        allowNull: true,
        comment: 'Source or reference for the content'
    })
    declare source: string;

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false,
        comment: 'Mark content as featured'
    })
    declare isFeatured: boolean;

    @Column({
        type: DataType.STRING,
        allowNull: true,
        comment: 'Subtitle for the content'
    })
    declare subtitle: string;

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false,
        comment: 'Flag to quickly check if content is a draft'
    })
    declare isDraft: boolean;

    @Column({
        type: DataType.STRING,
        allowNull: true,
        comment: 'Editor used for content creation (e.g., markdown, html)'
    })
    declare editor: string;

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: true,
        comment: 'Flag to indicate if content is public'
    })
    declare isPublic: boolean;
}

export default Content;
