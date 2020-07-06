const toggle = document.querySelector('.toggler')
const toggleCircle = toggle.querySelector('.toggler-circle')
console.log(toggleCircle);



toggle.addEventListener('click', () => {
  const body = document.body;

  if (body.classList.contains('dark')){
    body.classList.replace('dark','light');
    toggleCircle.style.transform = "translateX(20px)";
  }
  else {
    body.classList.replace('light','dark');
    toggleCircle.style.transform = "translateX(0px)";
  }
})