const titleHeader = document.getElementById('title-header');
const newContact = document.getElementById('newContact');
const searchContact = document.getElementById('searchContact');
const manageContact = document.getElementById('manageContact');
const buttonIndex = document.getElementById('index');
const iframe = document.querySelector('iframe')


newContact.addEventListener('click', (event) => {
    event.preventDefault()
    selectTab(event.target);
    window.open("/pages/novoContato.html", "body-contains")
});

searchContact.addEventListener('click', (event) => {
    event.preventDefault()
    selectTab(event.target);
    window.open("/pages/pesquisar.html", "body-contains")
});

manageContact.addEventListener('click', (event) => {
    event.preventDefault()
    selectTab(event.target);
    window.open("/pages/gerirContatos.html", "body-contains")
});

const selectTab = (element) => {
    
    const tabs = [...document.querySelectorAll('.tabs')];
    tabs.forEach((e) => {
        e.classList.remove('tabsSelected');
    })
    element.classList.add('tabsSelected');
}