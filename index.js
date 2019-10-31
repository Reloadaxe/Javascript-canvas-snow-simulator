var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 4;
var context = canvas.getContext("2d");
canvas.style.backgroundColor = "dodgerblue";
var snowsize = 5;
var snows = [];
var maxheight = [];
for (let i = 0; i < canvas.width / snowsize; i++) {
    maxheight.push(0);
}

addNewRandomSnow = (pos = null) => {
    if (!pos)
        pos = {x: Math.floor(Math.random() * (canvas.width / snowsize)), y: 0}
    let snow = new Snow(pos, Math.random() * 2 + 2);
    snow.fall();
    snows.push(snow);
}

window.addEventListener("keydown", (e) => {
    if (e.keyCode == 32) {
        addNewRandomSnow();
    } else if (e.key = 'r') {
        addNewRandomSnow({x: Math.floor((canvas.width / 3) / snowsize), y: 0});
    }
})

window.addEventListener("click", (e) => {
    addNewRandomSnow({x: Math.floor(e.clientX / snowsize), y: 0});
})

update = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    snows.forEach(snow => {
        snow.draw();
    });
}

setInterval(update, 10);