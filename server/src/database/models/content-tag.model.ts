import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import Content from "./content.model";
import Tag from "./tag.model";

@Table({
    tableName: 'content_tags',
    modelName: 'ContentTag',
    timestamps: true
})

class ContentTag extends Model {
    @Column({
        primaryKey: true,
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4
    })
    declare id: string;

    @ForeignKey(() => Content)
    @Column({
        type: DataType.UUID,
        allowNull: false
    })
    declare contentId: string;

    @BelongsTo(() => Content)
    declare content: Content;

    @ForeignKey(() => Tag)
    @Column({
        type: DataType.UUID,
        allowNull: false
    })
    declare tagId: string;

    @BelongsTo(() => Tag)
    declare tag: Tag;
}

export default ContentTag;
