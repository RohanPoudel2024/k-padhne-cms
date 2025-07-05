import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import User from "./user.model";

@Table({
    tableName: 'media',
    modelName: 'Media',
    timestamps: true,
    indexes: [
        { fields: ['fileType'] },
        { fields: ['uploadedBy'] },
        { fields: ['isActive'] },
        { fields: ['createdAt'] }
    ]
})

class Media extends Model {
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
    declare filename: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        validate: {
            len: [1, 255]
        }
    })
    declare originalName: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    declare filePath: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        validate: {
            isIn: [['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'application/pdf', 'text/plain', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']]
        }
    })
    declare mimeType: string;

    @Column({
        type: DataType.ENUM('image', 'document', 'video', 'audio', 'other'),
        allowNull: false
    })
    declare fileType: string;

    @Column({
        type: DataType.BIGINT,
        allowNull: false,
        validate: {
            min: 0,
            max: 104857600 // 100MB limit
        }
    })
    declare fileSize: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: true
    })
    declare width: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: true
    })
    declare height: number;

    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    declare altText: string;

    @Column({
        type: DataType.TEXT,
        allowNull: true
    })
    declare description: string;

    @ForeignKey(() => User)
    @Column({
        type: DataType.UUID,
        allowNull: false
    })
    declare uploadedBy: string;

    @BelongsTo(() => User)
    declare uploader: User;

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: true
    })
    declare isActive: boolean;

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    declare isPublic: boolean;

    @Column({
        type: DataType.INTEGER,
        defaultValue: 0
    })
    declare downloadCount: number;
}

export default Media;
