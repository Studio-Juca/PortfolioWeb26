
/* Connecting the button under the body in HTMl to the dark-mode setting*/
document.querySelector('#darkmode').addEventListener('click', function() {
      document.getElementsByTagName('body')[0].classList.toggle('dark');
});
