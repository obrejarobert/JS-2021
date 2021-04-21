document.querySelector("input[type='button']")
    .addEventListener("click", crypt)

function crypt() {
    let text = document.querySelector("textarea").value
    let cypher = document.querySelector("#cypher").value
    let encryptedText = encrypt(text, cypher)

    document.querySelector("#result").innerText = encryptedText
}

function encrypt(text, cypher) {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
    let encryptedAlphabet = shift(alphabet, cypher)
    let letterMap = zipAlphabet(alphabet, encryptedAlphabet)
    let encryptedText = text.split("")
        .map(letter => letterMap[letter])
        .join("")
    return encryptedText
}

function shift(alphabet, cypher) {
    let firstCut = alphabet.slice(0, cypher)
    let secondCut = alphabet.slice(cypher)
    return secondCut.concat(firstCut)
}

function zipAlphabet(alphabet1, alphabet2) {
    let zip = {}
    for (let index = 0; index < alphabet1.length; index++) {
        let firstLetter = alphabet1[index]
        let secondLetter = alphabet2[index]
        zip[firstLetter] = secondLetter
    }
    return zip 
}