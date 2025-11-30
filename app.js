const form = document.querySelector('form')
const height = document.getElementById('height')
const weight = document.getElementById('weight')
const btn = document.querySelector('button')
const resultMessage = document.querySelector('h1')
const category = document.querySelector('h2')

function convertCentimeter(cent) {
    return (cent / 100)
}

function result() {
    return ((weight.value) / convertCentimeter(height.value) ** 2)
}

function bmiCategory() {
    if (result() < 18.5) {
        return "Underweight: BMI < 18.5"
    }
    else if (result() >= 18.5 && result() <= 24.9) {
        return "Normal Weight: BMI  18.5 - 24.9"
    }
    else if (result() >= 25 && result() <= 29.9) {
        return "Normal Weight: BMI  25 - 29.9"
    }
    else {
        return `Obese: BMI ≥ 30`
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
})
btn.addEventListener('click', () => {
    resultMessage.textContent = `BMI: ${result().toFixed(2)}`
    category.textContent = bmiCategory()
})