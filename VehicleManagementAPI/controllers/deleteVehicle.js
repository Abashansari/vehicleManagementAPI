import Vehicle from "../models/VehicleModels.js"

const deleteVehicle = async (req, res) => {
    try {
        const { id } = req.params
        const vehicle = await Vehicle.findByPk(id)

        if (!vehicle) {
            return res.status(404).json({ message: "Vehicle not found !" })
        }
        await vehicle.destroy()
        res.status(200).json({ message: "Vehicle deleted successfully" })

    } catch (error) {
        res.status(500).json({ message: "Failed to delete vehicle" })
        console.log("Error :", error.message)
    }
}
export default deleteVehicle