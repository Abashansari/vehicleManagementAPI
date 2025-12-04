import Vehicle from "../models/VehicleModels.js"

const getVehicleById = async (req, res) => {
    try {
        const { id } = req.params
        const getVehicle = await Vehicle.findByPk(id)

        if (!getVehicle) {
            return res.json({ message: "No Vehicle record found with this Id:", id })
        }

        res.status(200).json({ message: "Vehicle details...", getVehicle })
        console.log(getVehicle)
    } catch (error) {
        res.status(500).json({ message: "failed to get Vehicle details !" })
        console.log("Error :", error.message)
    }
}
export default getVehicleById