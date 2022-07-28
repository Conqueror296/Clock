setInterval(() => {
    let a = new Date();
    let hh = a.getHours();
    let mm = a.getMinutes();
    if (mm<10) {
        mm="0"+a.getMinutes();
    } else {
        mm=a.getMinutes();
    }
    let ss = a.getSeconds();
    if (ss<10) {
        ss="0"+a.getSeconds();
    } else {
        ss=a.getSeconds();
    }
    document.getElementById("clock").innerHTML = a.toLocaleString('en-IN',{ hour:"numeric", minute:"numeric", second: "numeric", hour12:true});
    document.getElementById("clock").style.backgroundColor="grey"
    randombackground();
}, 1000);
setTimeout(() => {
    document.querySelector(".preloader").style.display="none"
}, 3000);

function randombackground(){
    let r = Math.floor(Math.random()*256) + 69;
    let g = Math.floor(Math.random()*256) + 69;
    let b = Math.floor(Math.random()*256) + 69;
    const bg = "rgb("+r +", " +g +", " +b +")";
    document.querySelector("#clock").style.backgroundColor = bg;
}