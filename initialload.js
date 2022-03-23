let sstart= 0;
let s2 = 0;
let s3 = 0;
let s4 = 0;
let s5 = 0;
let slast = 0;

    firstcheck()
document.addEventListener('scroll', (e) => {
    firstcheck()
})

function getYPosition() {
    let fullheight = document.documentElement.scrollHeight;
    let top = window.pageYOffset || document.documentElement.scrollTop;
    let currentpos = (top / (fullheight - (window.innerHeight))) * 100;
    return currentpos;
}

function firstcheck() {

    if (getYPosition() >= 50) {
        if (s3 == 0) {
            document.querySelectorAll(".hidetillscroll")[14].classList.add("fadein");
            document.querySelectorAll(".hidetillscroll")[15].classList.add("fadein2");
            document.querySelectorAll(".hidetillscroll")[16].classList.add("fadein3");
            document.querySelectorAll(".hidetillscroll")[17].classList.add("fadein4");
            s3 = 1;
        }
        else {

        }
    }
     else if (getYPosition() >= 15) {
        if (s2 == 0) {
            document.querySelectorAll(".hidetillscroll")[4].classList.add("fadein");
            document.querySelectorAll(".hidetillscroll")[5].classList.add("fadein2");
            document.querySelectorAll(".hidetillscroll")[6].classList.add("fadein");
            document.querySelectorAll(".hidetillscroll")[7].classList.add("fadefromtop2");
            document.querySelectorAll(".hidetillscroll")[8].classList.add("fadein2");
            document.querySelectorAll(".hidetillscroll")[9].classList.add("fadefromtop3");
            document.querySelectorAll(".hidetillscroll")[10].classList.add("fadein3");
            document.querySelectorAll(".hidetillscroll")[11].classList.add("fadefromtop4");
            document.querySelectorAll(".hidetillscroll")[12].classList.add("fadein4");
            document.querySelectorAll(".hidetillscroll")[13].classList.add("fadefromleft4");
            s2 = 1;
        }
        else {

        }
    }
    else if (getYPosition() >= 0) {
        if (sstart == 0) {
            document.querySelectorAll(".hidetillscroll")[0].classList.add("fadein");
            document.querySelectorAll(".hidetillscroll")[1].classList.add("fadefromtop2");
            document.querySelectorAll(".hidetillscroll")[2].classList.add("fadefromtop3");
            document.querySelectorAll(".hidetillscroll")[3].classList.add("fadefromtop4");
            sstart = 1;
        }
        else {

        }
    }
    else {

    }
}