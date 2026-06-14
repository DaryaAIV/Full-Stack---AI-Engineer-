addEventListener("DOMContentLoaded", () => {

    const moveRight = function () {
        const ball = document.getElementById("ball");
        let left = parseInt(ball.style.left) || 0;
        left += 15;
        ball.style.left = left + "px";
    }

    const moveLeft = function () {
        const ball = document.getElementById("ball");
        let left = parseInt(ball.style.left) || 0;
        left -= 15;
        ball.style.left = left + "px";
    }

    const moveUp = function () {
        const ball = document.getElementById("ball");
        let up = parseInt(ball.style.top) || 0;
        up -= 15;
        ball.style.top = up + "px";
    }

    const moveDown = function () {
        const ball = document.getElementById("ball");
        let down = parseInt(ball.style.top) || 0;
        down += 15;
        ball.style.top = down + "px";
    }
    const upBtn = document.getElementById("up");
    const downBtn = document.getElementById("down");
    const leftBtn = document.getElementById("left");
    const rightBtn = document.getElementById("right");

    rightBtn.onclick = moveRight;
    leftBtn.onclick = moveLeft;
    upBtn.onclick = moveUp;
    downBtn.onclick = moveDown;
});