function func(){
    digits = Array.from(document.querySelectorAll('table th'))
    digits.forEach(element => {
        numbers = element.textContent.split(':')
        let [i, j] = numbers.map(Number)
        sum = i + j;
        if ((i + j) % 2 == 0){
            element.style.backgroundColor = 'red'
        }
    });
}