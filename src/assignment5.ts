// Create a Vehicle interface with properties like Model, vehicle type (car, bike, scooter, truck, etc), wheels, manufactureYear, whether the car isElectric or not.

// Be creative and add more properties as you see fit.

// Then write a function that takes a Vehicle object as a parameter and outputs the details.

interface Vehicle {
    model: string;
    type: string;
    manufactureYear: number;
    isElectric: boolean;
}

const printDetails = (vehicle: Vehicle) => {
    console.log("Model: " + vehicle.model);
    console.log("Type: " + vehicle.type);
    console.log("Manufacture Year: " + vehicle.manufactureYear);
    console.log("Electric: " + vehicle.isElectric);
}
printDetails({
    model: "Dodge Charger Daytona",
    type: "Car",
    manufactureYear: 1969,
    isElectric: false
})