function login() {
  const u = document.getElementById("user").value;
  const p = document.getElementById("pass").value;

  let vaqt = new Date()


  if (u && p) {
    localStorage.setItem("muhammadziyo", "7722");
    location.href = "index.html";
  }
  else {
    location.href = "login.html";

  }
}
let bosh = document.getElementById(`bosh`)
let asos = document.getElementById(`asos`)

bosh.addEventListener(`click`, () => {

  asos.style.color = `grey`

})
asos.addEventListener(`click`, () => {

  bosh.style.color = `grey`
})

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

function sendCode() {
  const phone = document.getElementById("phone").value;

  if (!phone) {
    alert("Telefon raqamingizni kiriting");
    return;
  }

  // DEMO KOD
  const code = Math.floor(1000 + Math.random() * 9000);
  localStorage.setItem("sms_code", code);

  alert("Tasdiqlash kodi yuborildi: " + code);
}

function verifyCode() {
  const inputCode = document.getElementById("code").value;
  const realCode = localStorage.getItem("sms_code");

  if (inputCode === realCode) {
    alert("Telefon raqam tasdiqlandi");
    localStorage.setItem("phone_verified", "true");
    code.value = ``
    phone.value =  ``
  } else {
    alert("Kod noto‘g‘ri");
  }


}




