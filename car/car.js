let audirs5 = {
    make: "Audi",
    model: "RS5",
    year: 2021,
    color: "green",
    mileage: 0,
    maxSpeed: 280,
    averageConsumption: 11.5,
    batteryCapacity: 150,
    batteryCharge: 150,

    paint: function (color) {
        this.color = color
    },

    move: function (distance) {
        consumption = this.averageConsumption * distance / 100
        if (consumption > this.batteryCharge) {
            this.batteryCharge = 0
            this.mileage += this.distanceToEmpty()
        } else {
            this.batteryCharge -= consumption
            this.mileage += distance
        }
    },

    recharge: function () {
        this.batteryCharge = this.batteryCapacity
    },

    distanceToEmpty: function () {
        return 100 * this.batteryCharge / this.averageConsumption
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

audirs5.move(100)

console.log(audirs5.distanceToEmpty)

console.log(audirs5)

console.log(audirs7)