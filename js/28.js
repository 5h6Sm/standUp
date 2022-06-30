let a = document.querySelector('.touch');
let a2 = document.querySelector('.menu');
let b = document.querySelector('.select-ul')
let c = document.querySelector('.select-option')


a.addEventListener('click', function() {
    b.classList.toggle('show-option');
  
});

a2.addEventListener('click', function() {
    b.classList.toggle('show-option');
  
});

const toggleMenu = (toggleId, navListId) => {
    const toggle = document.getElementById(toggleId);
    const navList = document.getElementById(navListId);
    const toggleIcon = toggle.getElementsByTagName("i")[0];

    if(toggle && navList){
        //add : 추가, remove : 제거, toggle : 추가/제거
        toggle.addEventListener('click', () =>{
            //toggle menu
            // navList.classList.toggle('show-menu');
            //change toggle icon : bx-menu <-> bx-x-circle
            toggleIcon.classList.toggle("bx-menu");
            toggleIcon.classList.toggle("bx-x");
        });
    }

}
toggleMenu('menu', 'select-ul');
