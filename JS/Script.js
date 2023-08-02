const menuItems = document.querySelectorAll('li a[href^="#"]')

menuItems.forEach(item => {
    item.addEventListener('click', scrollToSection)
})

function scrollToSection(event){
    event.preventDefault()
    const element = event.target
    const id = element.getAttribute('href')
    const section = document.querySelector(id).offsetTop
    window.scroll({
        top: section - 50,
        behavior: 'smooth'
    })
}