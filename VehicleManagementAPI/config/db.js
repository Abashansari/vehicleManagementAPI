import { Sequelize} from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

const password=process.env.DB_PASSWORD
const user=process.env.DB_USER
const host=process.env.DB_HOST
const dialect=process.env.DB_DIALECT

const sequelize = new Sequelize ("vehiclemanagement", user, password, {
    host:host,
    dialect:dialect
})

export default sequelize  