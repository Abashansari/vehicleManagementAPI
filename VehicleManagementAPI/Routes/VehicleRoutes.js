import express from "express"
import addVehicle from "../controllers/addVehicle.js"
import getVehicle from "../controllers/getVehicle.js"
import getVehicleById from "../controllers/getVehicleById.js"
import updateVehicle from "../controllers/updateVehicle.js"
import deleteVehicle from "../controllers/deleteVehicle.js"

const vehicleRouter = express.Router()

vehicleRouter.post('/vehicle/addVehicle', addVehicle)
vehicleRouter.get('/vehicle/getVehicle', getVehicle)
vehicleRouter.get('/vehicle/getVehicle/:id', getVehicleById)
vehicleRouter.put('/vehicle/update/:id', updateVehicle)
vehicleRouter.delete('/vehicle/deleteVehicle', deleteVehicle)

export default vehicleRouter