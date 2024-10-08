const callButton = document.querySelector('.order-call-button');
const phoneNumberPopup = document.querySelector('.phone-number-popup');
const closePopup = document.querySelector('.close-number-popup'); 
const mobileCallButton = document.querySelector('.mobile-call-block');
const phoneNumberPopupMobile = document.querySelector('.phone-number-popup.mobile');

callButton.addEventListener('click', () => {
    phoneNumberPopup.classList.toggle('active');
});

closePopup.addEventListener('click', () => {
    phoneNumberPopup.classList.toggle('active');
});

mobileCallButton.addEventListener('click', () => {
    phoneNumberPopupMobile.classList.toggle('active');
});