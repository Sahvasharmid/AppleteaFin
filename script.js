const menuButtons = document.querySelectorAll('.menu-button');
const menuContents = document.querySelectorAll('.menu-content');

menuButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetMenu = button.getAttribute('data-menu');
    menuButtons.forEach(menuButton => {
        if (menuButton !== button) {
          menuButton.classList.remove('active');
        }
      });
      menuContents.forEach(content => {
        if (content.id === targetMenu) {
          content.classList.add('active');
        } else {
          content.classList.remove('active');
        }
      });
    });
  });
  


    

   