let toggleAboutLinks = document.getElementsByClassName('toggle-about__link');

for (const link of toggleAboutLinks) {
  link.addEventListener('click', toggleAbouts);
}

function toggleAbouts() {
  let aboutMe = document.getElementById('about-me');
  let aboutSite = document.getElementById('about-site');

  aboutMe.classList.toggle('hidden');
  aboutSite.classList.toggle('hidden');
}
