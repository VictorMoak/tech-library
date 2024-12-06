import { join } from 'path';
import { DataSource, DataSourceOptions } from 'typeorm';


export const typeOrmDataSourceConfig: DataSourceOptions = {
    type: 'mysql',
    migrationsTableName: 'migrations',
    host: 'localhost',
    port: 3306,
    username: 'root',
    database: 'tech_library',
    synchronize: false,
    entities: [join(__dirname, '..', '..', '**/*.entity{.ts,.js}')],
    migrations: [
        join(__dirname, '..', '..', 'database', 'migrations', '/*{.ts,.js}'),
    ],
};

export const dataSource = new DataSource(typeOrmDataSourceConfig);