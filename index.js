//--------------input
const input = document.createElement('input')
input.setAttribute('id', 'myInput')
input.setAttribute('type', 'text')
input.setAttribute('placeholder', 'text')
document.body.append(input)

//--------------div
const div = document.createElement('div')
div.style.border = '1px solid black'
div.style.display = 'none'
div.style.margin = '0 0 0 10px'
div.style.padding = '0 10px'
div.innerHTML = 'I am ghost'
document.body.append(div)

//функция фокусировки на текстовом поле
input.addEventListener('focus', () => {
    div.style.display = 'inline-block'
});

input.addEventListener('blur', () => {
    div.style.display = 'none'
});





