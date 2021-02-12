let button = document.getElementById("check")
let planet = document.getElementById("redplanet")

button.addEventListener("click", function () {
    planet.classList.add("alert")

    planet.innerText = "Alien invasion"

    // planet.style.fontWeight = "bold"
    // planet.style.color = "red"

    // planet.remove()
})

document.getElementById("reset")
    .addEventListener("click", function () {
        planet.classList.add("alert")

        planet.innerText = "Nothing to report"
        planet.classList.remove("alert")

        // planet.style.fontWeight = "bold"
        // planet.style.color = "red"

        // planet.remove()
    })