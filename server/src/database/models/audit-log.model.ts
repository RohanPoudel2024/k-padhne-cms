import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import User from "./user.model";

@Table({
    tableName: 'audit_logs',
    modelName: 'AuditLog',
    timestamps: true,
    indexes: [
        { fields: ['action'] },
        { fields: ['tableName'] },
        { fields: ['userId'] },
        { fields: ['createdAt'] },
        { fields: ['tableName', 'recordId'] }
    ]
})

class AuditLog extends Model {
    @Column({
        primaryKey: true,
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4
    })
    declare id: string;

    @Column({
        type: DataType.ENUM('CREATE', 'UPDATE', 'DELETE', 'LOGIN', 'LOGOUT', 'VIEW'),
        allowNull: false
    })
    declare action: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        validate: {
            len: [1, 100]
        }
    })
    declare tableName: string;

    @Column({
        type: DataType.UUID,
        allowNull: true
    })
    declare recordId: string;

    @Column({
        type: DataType.JSON,
        allowNull: true
    })
    declare oldValues: object;

    @Column({
        type: DataType.JSON,
        allowNull: true
    })
    declare newValues: object;

    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    declare ipAddress: string;

    @Column({
        type: DataType.TEXT,
        allowNull: true
    })
    declare userAgent: string;

    @Column({
        type: DataType.TEXT,
        allowNull: true
    })
    declare notes: string;

    @ForeignKey(() => User)
    @Column({
        type: DataType.UUID,
        allowNull: true
    })
    declare userId: string;

    @BelongsTo(() => User)
    declare user: User;

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    declare isSystemAction: boolean;

    @Column({
        type: DataType.ENUM('LOW', 'MEDIUM', 'HIGH', 'CRITICAL'),
        defaultValue: 'LOW'
    })
    declare severity: string;

    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    declare device: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
        comment: 'Geographical location of the user action'
    })
    declare location: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
        comment: 'Browser used during the action'
    })
    declare browser: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
        comment: 'Session ID for the user action'
    })
    declare sessionId: string;
}

export default AuditLog;
