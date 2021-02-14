import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateAuthors1613329392850 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'authors',
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
                    name: 'book_id',
                    type: 'int',
                    isNullable: false
                }
            ],
            foreignKeys: [
               {
                   name: 'AuthorBook',
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
        await queryRunner.dropTable('authors')
    }
}
