// nav-kontak.js — Auto-inject link "Kontak" ke navbar semua halaman LBH LAPAN
(function () {
  function injectKontakLink() {
    var isKontakPage = window.location.pathname.indexOf('kontak.html') !== -1;

    // NAVBAR DESKTOP
    var navLinks = document.querySelector('.nav-links');
    if (navLinks && !navLinks.querySelector('a[href="kontak.html"]')) {
      var li = document.createElement('li');
      li.className = 'nav-item';
      var a = document.createElement('a');
      a.href = 'kontak.html';
      a.className = 'nav-link-btn' + (isKontakPage ? ' active' : '');
      a.textContent = 'Kontak';
      li.appendChild(a);
      navLinks.appendChild(li);
    }

    // NAVBAR MOBILE DRAWER
    var mobileDrawer = document.getElementById('mobileDrawer');
    if (mobileDrawer && !mobileDrawer.querySelector('a[href="kontak.html"]')) {
      var link = document.createElement('a');
      link.href = 'kontak.html';
      link.className = 'm-direct-link';
      link.textContent = '📍 Kontak & Lokasi';
      if (isKontakPage) link.style.color = '#fb8500';

      var verifLink = mobileDrawer.querySelector('a[href="verifikasi-kta.html"]');
      if (verifLink) {
        mobileDrawer.insertBefore(link, verifLink);
      } else {
        mobileDrawer.appendChild(link);
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectKontakLink);
  } else {
    injectKontakLink();
  }
})();
