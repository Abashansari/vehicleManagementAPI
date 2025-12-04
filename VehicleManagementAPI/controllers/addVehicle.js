import Vehicle from "../models/VehicleModels.js"

const addVehicle = async (req, res) => {
    try {
        const { name, vehicleNumber, driverName } = req.boby
        const vehicle = new Vehicle.create({
            name,
            vehicleNumber,
            driverName
        })

        res.status(201).json({ message: "Vehicle added successfully", vehicle })
        console.log(vehicle)

    } catch (error) {
        res.status(400).json({ error: "Fail to add vehicle" })
        console.log("Error :", error.message)
    }
}
export default addVehicle