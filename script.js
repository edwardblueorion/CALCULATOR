function add(valuee) {
    document.getElementById('screen').value += valuee
}

function result() {
    const valueScreen = document.getElementById('screen').value
    const resultScreen = eval(valueScreen)
    document.getElementById('screen').value = resultScreen
}

function deletee() {
    document.getElementById('screen').value = ''
}
