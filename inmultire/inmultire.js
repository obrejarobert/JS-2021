// let j = 3

for (let j = 0; j < 10; j++) {
    document.write("<div>")
    for (let i = 0; i < 10; i++) {
        let produs = i * j
        document.write(i + " x " + j + " = " + produs + "<br>")
    }
    document.write("</div>")
    document.write("<br>")
}