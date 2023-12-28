const btnHeight = 110;
const btnWidth = 160;

const maxWidth = window.innerWidth - btnWidth;
const maxHeight = window.innerHeight - btnHeight;

window.addEventListener('DOMContentLoaded',()=>{
const btn = document.getElementById('moving');



btn.addEventListener('click',()=>{
  btn.style.left = Math.floor(Math.random()*(maxWidth+1)) + 'px';
  btn.style.top = Math.floor(Math.random()* (maxHeight +1)) + 'px'
})
})
