document.addEventListener("DOMContentLoaded", function () {
  // Manipulação do formulário de contato
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Mensagem enviada com sucesso!");
    form.reset();
  });

  // Animação de visibilidade das seções ao rolar
  const sections = document.querySelectorAll("section");

  const checkVisibility = () => {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionBottom = section.getBoundingClientRect().bottom;

      if (sectionTop < window.innerHeight && sectionBottom > 0) {
        section.classList.add("visible");
      }
    });
  };

  // Verifica visibilidade ao rolar a página e ao carregar
  window.addEventListener("scroll", checkVisibility);
  checkVisibility(); // Verifica a visibilidade ao carregar a página
});

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  const navItems = document.querySelectorAll('.nav-links li a'); // Seleciona todos os links do menu

  // Abre/fecha o menu ao clicar no ícone do menu
  menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      menuToggle.classList.toggle('active');
  });

  // Fecha o menu ao clicar em um link do menu
  navItems.forEach(item => {
      item.addEventListener('click', function() {
          navLinks.classList.remove('active'); // Fecha o menu
          menuToggle.classList.remove('active'); // Remove a animação do ícone
      });
  });
});
