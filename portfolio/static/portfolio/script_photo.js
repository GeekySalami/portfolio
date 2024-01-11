document.addEventListener("DOMContentLoaded", function() {
    const hoverDiv = document.querySelector('.hover-div');
  
    hoverDiv.addEventListener('mouseenter', function() {
      hoverDiv.classList.add('hovered');
    });
  
    hoverDiv.addEventListener('mouseleave', function() {
      hoverDiv.classList.remove('hovered');
    });
  });
  