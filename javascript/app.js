let btn = document.querySelector('#btn');
let sidebar = document.querySelector('.sidebar');
let searchBtn = document.querySelector('.btn_busqueda');
let linkName = document.querySelector('.links-name');
let btnUser = document.querySelector('.profile_content');
let subMenu = document.querySelector('.sub-menu')

btn.onclick = () => {
    sidebar.classList.toggle('active');
}

searchBtn.onclick = () => {
    sidebar.classList.toggle('active');
}

btnUser.onclick = () => {
    subMenu.classList.toggle('active')
}