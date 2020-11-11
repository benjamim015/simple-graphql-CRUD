const dir = process.env.NODE_ENV === 'build' ? 'dist' : 'src'
const ext = process.env.NODE_ENV === 'build' ? 'js' : 'ts'

module.exports = {
  type: "postgres",
  host: `${process.env.POSTGRES_HOST}`,
  port: `${process.env.POSTGRES_PORT}`,
  username: `${process.env.POSTGRES_USERNAME}`,
  password: `${process.env.POSTGRES_PASSWORD}`,
  database: `${process.env.POSTGRES_DATABASE}`,
  entities: [
    `./${dir}/modules/**/typeorm/entities/*.${ext}`
  ],
  migrations: [
    `./${dir}/shared/database/migrations/*.${ext}`
  ],
  cli: {
    migrationsDir: `./${dir}/shared/database/migrations`
  }
}
