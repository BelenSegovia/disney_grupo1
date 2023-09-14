const btn = document.querySelector('#btn');
const sidebar = document.querySelector('.sidebar');
const searchBtn = document.querySelector('.btn_busqueda');
const linkName = document.querySelector('.links-name');
const btnUser = document.querySelector('.profile_content');
const subMenu = document.querySelector('.sub-menu')

btn.onclick = () => {
    sidebar.classList.toggle('active');
}

searchBtn.onclick = () => {
    sidebar.classList.toggle('active');
}

btnUser.onclick = () => {
    subMenu.classList.toggle('active')
}