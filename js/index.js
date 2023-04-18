let images = document.querySelectorAll("#imgWrapper>img");
let imgMainModal = document.getElementById("imgMainModal");
let modelNumImg = document.getElementById("modelNumImg");
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function (e) {
        modelNumImg.innerText = i + 1;
        imgMainModal.src = e.target.src;
    })
}