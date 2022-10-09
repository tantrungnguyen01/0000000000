let menu = document.querySelector('.cart');
menu.onclick = function () {
    menu.classList.toggle('active');
    let navigation = document.querySelector('.card-wrapper');
    navigation.classList.toggle('active');
}