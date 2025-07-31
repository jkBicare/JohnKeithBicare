const certItems = document.querySelectorAll('.certificate-item');
let currentCert = 0;

document.querySelector('.next').addEventListener('click', () => {
    certItems[currentCert].classList.remove('active');
    currentCert = (currentCert + 1) % certItems.length;
    certItems[currentCert].classList.add('active');
});

document.querySelector('.prev').addEventListener('click', () => {
    certItems[currentCert].classList.remove('active');
    currentCert = (currentCert - 1 + certItems.length) % certItems.length;
    certItems[currentCert].classList.add('active');
});
