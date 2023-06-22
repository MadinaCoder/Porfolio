const toggleBtn = document.querySelector('.toggle_btn');
const bars = document.querySelector('.toggle_btn i');
const DropdownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function(){
    DropdownMenu.classList.toggle('open')
    bars.classList.toggle('rotate')
    // const isOpen = DropdownMenu.classList.contains('open')

    // bars.classList = isOpen
    // ? 'fa-solid fa-xmark'
    // : 'fa-solid fa-bras'
}


