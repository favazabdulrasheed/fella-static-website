


var like = []
var love = []

for (var i = 1; i < 4; i++) {
    for (var j = 1; j < 4; j++) {

        like[i * (j ** 2)] = document.getElementById(`like_${i}${j}`)
        love[i * (j ** 2)] = document.getElementById(`love_${i}${j}`)

    }

}

var lovebtn = document.getElementById("img");
var card = document.getElementById("imagecard");
var heart = document.getElementsByClassName('im');
var likebutton = document.getElementById('likebutton');

b = 1;
c = 1;

for (var i = 0, length = heart.length; i < length; i++) {
    heart[i].style.opacity = "0";
    heart[i].style.width = "30px";
    heart[i].style.height = "30px";


}

function loveanim(i) {
    heart[i].style.opacity = "1";
    heart[i].style.width = "50px";
    heart[i].style.height = "50px";

    setTimeout(function () {
        heart[i].style.width = "30px";
        heart[i].style.height = "30px";
        heart[i].style.opacity = "0";
    }, 400

    );

    heart[i].style.transform = "translate(-100px,200px)";
    setTimeout(function () {
        heart[i].style.transform = "translate(40%,40%)";
    }, 800)

}





function changeClass(i, j) {
    if (love[i * (j ** 2)].className == "fa-regular fa-heart") {
        love[i * (j ** 2)].className = "fa-solid fa-heart"
    }
    else {
        love[i * (j ** 2)].className = "fa-regular fa-heart"
    }






}
function liker(i, j) {
    if (like[i * (j ** 2)].className == "fa-regular fa-thumbs-up") {
        like[i * (j ** 2)].className = "fa-solid fa-thumbs-up"
    }
    else {
        like[i * (j ** 2)].className = "fa-regular fa-thumbs-up"
    }
}

function changeClassdbl(i, j) {

    love[i * (j ** 2)].className = "fa-solid fa-heart"


}