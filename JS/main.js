const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

//Обработчки событий при нажатии кнопки
document.addEventListener("keydown", function(event){
    jump();
});


//Функция jump, которая добавляет класс "jump" элементу #dino
function jump(){
    if (dino.classList != "jump"){
        dino.classList.add("jump");
    }
    setTimeout(function(){
        dino.classList.remove("jump");
    }, 500);
    
};

let isAlive = setInterval(function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));


    if(cactusLeft < 50 && cactusLeft > 0 && dinoTop <= 140){
        alert("Game Over");
    }
}, 10);