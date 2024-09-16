let word = prompt('Informe uma palavra')
let inverseWord = ""
let i 

for (i = word.length - 1; i >= 0; i--) {
    inverseWord += word[i]
}

if (word === inverseWord) {
    alert(`A palavra ${word} é um palíndromo`)
} else {
    alert(`A palavra ${word} não é um palíndromo.`)
}