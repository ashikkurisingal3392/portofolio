document.addEventListener('DOMContentLoaded',()=>{
  const projectModel= document.getElementById('myPreview');
 const projectTitle = document.getElementById('titleProject');
 const projectImage = document.getElementById('imgProject');
 const projectLink = document.getElementById('linkProject');
 const btnClose = document.querySelector('.close');

 document.querySelectorAll('.openPreview').forEach(para => {

  para.addEventListener('click', event => {

    event.preventDefault();
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


