import Vehicle from "../models/VehicleModels.js"

const updateVehicle = async (req, res) => {
    try {
        const { id } = req.params
        const { vehicleNumber, model, driverName } = req.body

        const vehicle = await Vehicle.findByPk(id)

        if (!vehicle) {
            return res.status(404).json({ message: "Vehicle not found !" })
        }
        await vehicle.update({ vehicleNumber, model, driverName })

        res.status(201).json({ message: "vehicle has updated !", vehicle })
        console.log(vehicle)

    } catch (error) {
        res.status(500).json({ message: "failed to update !" })
        console.log("Error :", error.message)
    }
}
export default updateVehicle