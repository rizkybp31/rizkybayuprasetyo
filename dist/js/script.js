window.onscroll = function () {
  const header = document.querySelector('header');
  const navbar = header.offsetTop

  if (window.pageYOffset > navbar) {
    header.classList.add('navbar');
  } else {
    header.classList.remove('navbar');
  }

}

const menu = document.querySelector('#menu');
const navigation = document.querySelector('nav');

menu.addEventListener('click', function () {
  menu.classList.toggle('menu-active');
  navigation.classList.toggle('hidden');
});

window.addEventListener('click', function (event) {
  if (event.target != menu && event.target != navigation) {
    menu.classList.remove('menu-active');
    navigation.classList.add('hidden');
  }
})

const changeTheme = document.querySelector('#change');
const root = document.querySelector('html');
const night = document.querySelector('.night');
const light = document.querySelector('.light')

changeTheme.addEventListener('click', function () {
  root.classList.toggle('dark');
  if (root.classList.contains('dark')) {
    night.classList.add('hidden');
    light.classList.remove('hidden');
  } else {
    night.classList.remove('hidden');
    light.classList.add('hidden');
  }
})