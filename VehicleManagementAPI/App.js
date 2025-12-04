import express from "express"
import cors from 'cors'
import vehicleRouter from "./Routes/VehicleRoutes.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use('/vehicle', vehicleRouter)

export default app