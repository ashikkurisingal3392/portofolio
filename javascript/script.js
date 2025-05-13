
/*Project preview */
document.addEventListener('DOMContentLoaded',()=>{
  const projectModel= document.getElementById('myPreview');
 const projectTitle = document.getElementById('titleProject');
 const projectImage = document.getElementById('imgProject');
 const projectLink = document.getElementById('linkProject');
 const btnClose = document.querySelector('.close');

 document.querySelectorAll('.openPreview').forEach(para => {

  para.addEventListener('click', event => {

    event.preventDefault();/*prevent default action of anchor element */
    projectTitle.textContent = para.dataset.title;
    projectImage.src = para.dataset.image;
    projectLink.href = para.dataset.link;
    projectModel.style.display = 'block';
  });
  
});
/* close button trigger */
btnClose.addEventListener('click', () =>{

  projectModel.style.display='none';
} )

/* to close window when click on anywhere on website */
window.addEventListener('click',(event)=>{

    if(event.target === projectModel){
      projectModel.style.display ='none';
    }

});

});

/*hamburger navigation */

const hamburgerElement = document.querySelector('.hamburger');
const navmenu = document.querySelector('#navMenu ul')
hamburgerElement.addEventListener('click',() => {

  const expanded =hamburgerElement.getAttribute('aria-expanded') === 'true'; /*checks the current value of the aria-expanded attribute. */
  hamburgerElement.setAttribute('aria-expanded',!expanded);/*set a value ,if true then set false,vice versa */
  navmenu.classList.toggle('open');
});