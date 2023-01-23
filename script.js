let main = document.querySelector('.formulario');
let input = document.querySelector('.senha');
let icon = document.querySelector('.img');

icon.addEventListener('click', function(){
    main.classList.toggle('visible');
    if(main.classList.contains('visible')){
        icon.src = 'imgs/eye-off.svg';
        input.type = 'text';
    } else {
        icon.src = 'imgs/eye.svg';
        input.type = 'password';
    }
}
)



