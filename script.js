const download = document.querySelector(".download");
const appstore = document.querySelector(".appstore");
const googleplay = document.querySelector(".googleplay")

download.addEventListener("click", (evt) => {
    window.location.href = "https://play.google.com/store/games?pli=1"
});

appstore.addEventListener("click", (evt) => {
    window.location.href = "https://www.apple.com/app-store/"
});

googleplay.addEventListener("click", (evt) => {
    window.location.href = "https://play.google.com/store/games?pli=1"
});

const secondSectionFirstBlock = document.querySelector(".secondSectionFirstBlock");
const secondSectionSecondBlock = document.querySelector(".secondSectionSecondBlock");
const secondSectionThirdBlock = document.querySelector(".secondSectionThirdBlock");

const partOneTxt = document.querySelector(".part1txt");
const statues = document.querySelectorAll(".status");

const numberOne = document.querySelector(".numberOne");
const numberTwo = document.querySelector(".numberTwo");
const numberThree = document.querySelector(".numberThree");

const usersResponsive = document.querySelector(".usersResponsive");

const fivethSectionBlock = document.querySelector(".fivethSectionBlock");
const fivethSectionBlockResponsive = document.querySelector(".fivethSectionBlockResponsive");

let sec = 0;
let sec2 = 0;
let sec3 = 0;
let num = 15;

numberOne.innerHTML = sec;
numberTwo.innerHTML = sec2;
numberThree.innerHTML = sec;

let scroll470 = true;
let scroll1160 = true;
let scroll1900 = true;
let scroll2630 = true;
let scroll2750 = true;
let scroll3032 = true;
let scroll3450 = true;
let scroll4130 = true;
let scroll5050 = true;

document.addEventListener("scroll", (evt) => {
    let scroll = Math.floor(scrollY);

    if (scroll470 && scroll >= 470) {
        secondSectionFirstBlock.style.opacity = "1";
        scroll470 = false;
    }

    if (scroll1160 && scroll >= 1160) {
        secondSectionSecondBlock.style.opacity = "1";
        scroll1160 = false;
    }

    if (scroll1900 && scroll >= 1900) {
        secondSectionThirdBlock.style.opacity = "1";
        scroll1900 = false;
    }

    if (scroll2630 && scroll >= 2630) {
        partOneTxt.style.opacity = "1";
        scroll2630 = false;
    }

    if (scroll2750 && scroll >= 2750) {
        statues.forEach((item) => {
            item.style.opacity = "1";
        })

        scroll2750 = false;
    }

    if (scroll3032 && scroll >= 3032) {
        let number = setInterval(() => {
            if (sec <= num - 1) {
                sec++
                numberOne.innerHTML = sec;
            } else {
                clearInterval(number);
            }
        }, 50)


        let num2 = 230;


        let number2 = setInterval(() => {
            if (sec2 < num2) {
                sec2++
                numberTwo.innerHTML = sec2 + " K";
            } else {
                clearInterval(number2);
            }
        }, 0.1)

        let num3 = 340;

        let number3 = setInterval(() => {
            if (sec3 < num3) {
                sec3++
                numberThree.innerHTML = sec3 + " +";
            } else {
                clearInterval(number3);
            }
        }, 0.1)

        scroll3032 = false;
    }

    if (scroll4130 && scroll >= 4130) {
        usersResponsive.style.opacity = "1";
        scroll4130 = false;
    }

    if(scroll3450 && scroll >= 3450) {
        fivethSectionBlock.style.opacity = "1";
        scroll3450 = false;
    }

    if(scroll5050 && scroll >= 5050) {
        fivethSectionBlockResponsive.style.opacity = "1";
        scroll5050 = false;
    }
})

const instagram = document.querySelector(".instagram");
const messenger = document.querySelector(".messenger");
const facebook = document.querySelector(".facebook");
const twitter = document.querySelector(".twitter");

instagram.addEventListener("click", (evt) => {
    window.location.href = "https://www.instagram.com/sahakiiiannnnn/";
});

messenger.addEventListener("click", (evt) => {
    window.location.href = "https://www.messenger.com/";
});

facebook.addEventListener("click", (evt) => {
    window.location.href = "https://www.facebook.com/profile.php?id=100090614104227";
});


twitter.addEventListener("click", (evt) => {
    window.location.href = "https://twitter.com/home";
});
