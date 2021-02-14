import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateComments1613330822054 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'comments',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'name',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'review',
                    type: 'text',
                    isNullable: false
                },
                {
                    name: 'book_id',
                    type: 'int',
                    isNullable: false
                }
            ],
            foreignKeys: [
               {
                   name: 'CommentBook',
                   referencedTableName: 'books',
                   referencedColumnNames: ['id'],
                   columnNames: ['book_id'],
                   onUpdate: 'CASCADE',
                   onDelete: 'CASCADE'
               } 
            ]
        },
        ))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('comments')
    }

}
