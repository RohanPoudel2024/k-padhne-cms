import { Table, Column, Model, DataType, ForeignKey, BelongsTo, BelongsToMany } from "sequelize-typescript";
import User from "./user.model";
import Content from "./content.model";

@Table({
    tableName: 'tags',
    modelName: 'Tag',
    timestamps: true
})

class Tag extends Model {
    @Column({
        primaryKey: true,
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4
    })
    declare id: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true,
        validate: {
            len: [1, 50]
        }
    })
    declare name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true,
        validate: {
            len: [1, 50]
        }
    })
    declare slug: string;

    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    declare description: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
        validate: {
            isHexColor(value: string) {
                if (value && !/^#[0-9A-F]{6}$/i.test(value)) {
                    throw new Error('Color must be a valid hex color');
                }
            }
        }
    })
    declare color: string;

    @ForeignKey(() => User)
    @Column({
        type: DataType.UUID,
        allowNull: false
    })
    declare createdBy: string;

    @BelongsTo(() => User)
    declare creator: User;

    @Column({
        type: DataType.INTEGER,
        defaultValue: 0
    })
    declare usageCount: number;

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: true
    })
    declare isActive: boolean;
}

export default Tag;
