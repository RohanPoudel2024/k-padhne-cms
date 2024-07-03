import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import Content from "./content.model";
import Category from "./category.model";

@Table({
    tableName: 'content_categories',
    modelName: 'ContentCategory',
    timestamps: true
})

class ContentCategory extends Model {
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

    @ForeignKey(() => Category)
    @Column({
        type: DataType.UUID,
        allowNull: false
    })
    declare categoryId: string;

    @BelongsTo(() => Category)
    declare category: Category;
}

export default ContentCategory;
