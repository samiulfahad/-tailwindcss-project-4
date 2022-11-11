const tabs = document.querySelectorAll('.tab')
const panels = document.querySelectorAll('.panel')

const onTabClick = (e) => {
    // Deactivate all Tabs
    tabs.forEach(tab => {
        tab.classList.remove('border-b-4', 'border-softRed')
    })

    // Hide All Panels
    panels.forEach(panel => {
        panel.classList.add('hidden')
    })
    e.target.parentNode.classList.add('border-b-4', 'border-softRed')
    const panelId = e.target.getAttribute('data-target')
    const panel = document.getElementById(panelId)
    panel.classList.remove('hidden')
}

tabs.forEach(tab => tab.addEventListener('click', onTabClick))

// Mobile Menu
const menuBtn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')
const toggleMenu = (e) => {
    menuBtn.classList.toggle('open')
    menu.classList.toggle('hidden')
    menu.classList.toggle('flex')

}
menuBtn.addEventListener('click', toggleMenu)