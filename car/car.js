let audirs5 = {
    make: "Audi",
    model: "RS5",
    year: 2021,
    color: "green",
    mileage: 0,
    maxSpeed: 280,
    paint: function (color) {
        this.color = color
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