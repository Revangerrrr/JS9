
function func(){
console.log(document.getElementsByTagName('div')[0].innerHTML)
console.log(document.getElementsByTagName('ul')[0].innerText)
console.log(document.getElementsByTagName('li')[1].innerHTML)
}
window.onload = () => func()