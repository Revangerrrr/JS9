function func(){
console.log(document.getElementById('age-table'))
console.log(...document.querySelectorAll('#age-table label'))
console.log(document.querySelectorAll('table td')[0].innerHTML)
console.log(document.getElementsByName('search')[0].name)
console.log(document.querySelectorAll('form[name="search"] input')[0].type)
console.log(document.querySelectorAll('form[name="search"] input')[1].type)
}
window.onload = () => func()