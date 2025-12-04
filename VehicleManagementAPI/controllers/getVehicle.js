import Vehicle from "../models/VehicleModels.js"

const getVehicle = async (req, res) => {
    try {

        const vehicles = await Vehicle.findAll()
        res.status(200).json({ message: "Fetched all vehicles successfully ! ", vehicles })
        console.log(vehicles)

    } catch (error) {
        res.status(500).json({ error: "Failed to get vehicles details" })
        console.log("Error :", error.message)
    }
}
export default getVehicle