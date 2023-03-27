const download = document.querySelector(".download");

download.addEventListener("click", (evt) => {
    window.location.href = "https://github.com/asahakian"
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

let sec = 0;
let sec2 = 0;
let sec3 = 0;
let num = 15;

numberOne.innerHTML = sec;
numberTwo.innerHTML = sec2;
numberThree.innerHTML = sec;

let scroll800 = true;
let scroll1400 = true;
let scroll2200 = true;
let scroll2650 = true;
let scroll2900 = true;
let scroll3032 = true;
let scroll4300 = true;

document.addEventListener("scroll", (evt) => {
    let scroll = Math.floor(scrollY);

    if (scroll800 && scroll >= 800) {
        secondSectionFirstBlock.style.opacity = "1";
        scroll800 = false;
    }

    if (scroll1400 && scroll >= 1400) {
        secondSectionSecondBlock.style.opacity = "1";
        scroll1400 = false;
    }

    if (scroll2200 && scroll >= 2200) {
        secondSectionThirdBlock.style.opacity = "1";
        scroll2200 = false;
    }

    if (scroll2650 && scroll >= 2650) {
        partOneTxt.style.opacity = "1";
        scroll2650 = false;
    }

    if (scroll2900 && scroll >= 2900) {
        statues.forEach((item) => {
            item.style.opacity = "1";
        })

        scroll2900 = false;
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

    if (scroll4300 && scroll >= 4300) {
        usersResponsive.style.opacity = "1";
        scroll4300 = false;
    }
})
