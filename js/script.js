class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);
mobileNavbar.init();

let btn = document.querySelector('.btn-ld');

btn.addEventListener('click', () => {

  btn.classList.toggle('activeLD');
  document.querySelector('body').classList.toggle('activeLD');
  document.querySelector('.logo').classList.toggle('activeLD');
  document.querySelector('nav').classList.toggle('activeLD');
  document.querySelector('.line1').classList.toggle('activeLD');
  document.querySelector('.line2').classList.toggle('activeLD');
  document.querySelector('.line3').classList.toggle('activeLD');
  document.querySelector('.titulo').classList.toggle('activeLD');
  document.querySelector('.subtitle').classList.toggle('activeLD');
  document.querySelector('.sobre-txt').classList.toggle('activeLD');
  document.querySelector('.servicos-txt').classList.toggle('activeLD');
  document.querySelector('.form-title').classList.toggle('activeLD');
  document.querySelector('.form-label1').classList.toggle('activeLD');
  document.querySelector('.form-label2').classList.toggle('activeLD');
  document.querySelector('.form-label3').classList.toggle('activeLD');
  document.querySelector('.form-label4').classList.toggle('activeLD');
  document.querySelector('.form-input1').classList.toggle('activeLD');
  document.querySelector('.form-input2').classList.toggle('activeLD');
  document.querySelector('.form-input3').classList.toggle('activeLD');
  document.querySelector('.form-input4').classList.toggle('activeLD');
  document.querySelector('.btn-submit').classList.toggle('activeLD');
  document.querySelector('.rodape-txt').classList.toggle('activeLD');
  document.querySelector('.nav-list').classList.toggle('activeLD');
  document.getElementById('contact').classList.toggle('activeLD');

});