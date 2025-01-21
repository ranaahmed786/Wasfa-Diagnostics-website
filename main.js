document.querySelectorAll('.card').forEach(function(card) {
    card.onclick = function() {
        this.classList.toggle('flipped');
    };
});
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      // Prevent the default anchor link jump behavior
      e.preventDefault();
      
      // Get the target section
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      // Scroll to the target section smoothly
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  function showSideBar(){
    const menubtn = document.querySelector('#menu-btn')
    const sideBar = document.querySelector('.sidebar');
    const logo =document.querySelector('#logo')
    sideBar.style.display = 'flex';
    logo.style.marginRight = '290px';
    menubtn.style.display='none';
 

  }
  function hideSideBar(){
    const sideBar = document.querySelector('.sidebar');
    const menubtn = document.querySelector('#menu-btn');
    const logo =document.querySelector('#logo');
    logo.style.marginRight = '0px';
    sideBar.style.display = 'none';
    menubtn.style.display='flex';
  }