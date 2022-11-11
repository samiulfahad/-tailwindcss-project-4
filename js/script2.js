const tabs = document.querySelectorAll('.tab')
const panels = document.querySelectorAll('.panel')
const onTabClick = (e) => {
    tabs.forEach(tab => {
        tab.classList.remove('border-b-4', 'border-yellow-400')
    })
    panels.forEach(panel => {
        panel.classList.add('hidden')
    })
    const panelId = e.target.getAttribute('data-target')
    const panel = document.getElementById(panelId)
    panel.classList.remove('hidden')
    console.log(e.target.parentNode)
    e.target.parentNode.classList.add('border-b-4', 'border-yellow-400')
}

tabs.forEach(tab => {
    tab.addEventListener('click', onTabClick)
})
