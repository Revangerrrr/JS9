function func(){
    let links = Array.from(document.querySelectorAll('a'))
    links.forEach(element => {
        if (element.innerHTML.includes('://') && !(element.innerHTML.includes('http://internal.com')))
            element.style.color = 'orange'
    });
}