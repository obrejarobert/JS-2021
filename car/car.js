let audirs5 = {
    make: "Audi",
    model: "RS5",
    year: 2021,
    color: "green",
    mileage: 0,
    maxSpeed: 280,
    averageConsumption: 11.5,
    batteryCharge: 150,

    paint: function (color) {
        this.color = color
    },

    move: function (distance) {
        consumption = this.averageConsumption * distance / 100
        this.batteryCharge -= consumption
    }
}

let audirs7 = {
    make: "Audi",
    model: "RS7",
    year: 2021,
    color: "red",
    mileage: 0,
    maxSpeed: 305,

    paint: function (color) {
        this.color = color
    }
}

audirs5.paint("yellow")

console.log(audirs5)

console.log(audirs7)