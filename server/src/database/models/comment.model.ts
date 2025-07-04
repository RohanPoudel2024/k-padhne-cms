import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import User from "./user.model";
import Content from "./content.model";

@Table({
    tableName: 'comments',
    modelName: 'Comment',
    timestamps: true
})

class Comment extends Model {
    @Column({
        primaryKey: true,
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4
    })
    declare id: string;

    @Column({
        type: DataType.TEXT,
        allowNull: false,
        validate: {
            len: [1, 1000]
        }
    })
    declare content: string;

    @ForeignKey(() => User)
    @Column({
        type: DataType.UUID,
        allowNull: false
    })
    declare userId: string;

    @BelongsTo(() => User)
    declare user: User;

    @ForeignKey(() => Content)
    @Column({
        type: DataType.UUID,
        allowNull: false
    })
    declare contentId: string;

    @BelongsTo(() => Content)
    declare contentPost: Content;

    @ForeignKey(() => Comment)
    @Column({
        type: DataType.UUID,
        allowNull: true
    })
    declare parentId: string;

    @BelongsTo(() => Comment)
    declare parent: Comment;

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: true
    })
    declare isActive: boolean;

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    declare isApproved: boolean;
}

export default Comment;
