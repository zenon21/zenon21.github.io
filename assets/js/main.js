/**
 * Opens mobile nav overlay and fixes body in place so it won't scroll while
 * nav overlay is open.
 */
function toggleMobileNav() {
  const body = document.querySelector('body');
  const overlay = document.querySelector('.mobile-nav__overlay');

  overlay.classList.toggle('mobile-nav--open');
  body.classList.toggle('overflow-hidden');
}
