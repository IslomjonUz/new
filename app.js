const likeButtonWhite = document.querySelector(".white-heart-enable");
const likeButtonBlack = document.querySelector(".red-heart-disable");
const likeButton = document.querySelector(".like-btn");

const SaveButtonWhite = document.querySelector(".white-save-enable");
const SaveButtonBlack = document.querySelector(".black-save-disable");
const SaveButton = document.querySelector(".save-btn");

function toggleLike() {
    likeButtonWhite.classList.toggle("white");
    likeButtonBlack.classList.toggle("black");
}


function toggleSave() {
    SaveButtonWhite.classList.toggle("white");
    SaveButtonBlack.classList.toggle("black");
}
