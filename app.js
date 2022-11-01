const btnMenuElement = document.getElementById('buttonMenu');
const btnCloseMenuElement = document.getElementById('buttonClose');
const menuElement = document.getElementById('menu');

btnMenuElement.addEventListener('click', () => {
    console.log('click');
    menuElement.style.display = 'flex';
    btnMenuElement.style.display = 'none';
    btnCloseMenuElement.style.display = 'block';
})

btnCloseMenuElement.addEventListener('click', () => {
    console.log('click boton para ocultar menu');
    menuElement.style.display = 'none';
    btnCloseMenuElement.style.display = 'none';
    btnMenuElement.style.display = 'block';
})