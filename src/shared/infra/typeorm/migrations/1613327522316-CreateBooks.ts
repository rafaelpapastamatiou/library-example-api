import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class CreateBooks1613327522316 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'books',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'title',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'description',
                    type: 'text',
                    isNullable: false
                },
                {
                    name: 'isbn',
                    type: 'char',
                    length: '13',
                    isNullable: false
                },
                {
                    name: 'releaseDate',
                    type: 'date',
                    isNullable: false
                },
                {
                    name: 'photoUrl',
                    type: 'varchar',
                    isNullable: false
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('books')
    }
}
