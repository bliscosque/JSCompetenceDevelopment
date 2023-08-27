let randomNum1=Math.floor(Math.random()*6)+1
let randomNum2=Math.floor(Math.random()*6)+1

let src1='./images/dice'+randomNum1+'.png'
let src2='./images/dice'+randomNum2+'.png'
document.querySelector(".img1").setAttribute('src',src1)
document.querySelector(".img2").setAttribute('src',src2)

let msg;
if (randomNum1>randomNum2) msg="Player 1 wins!"
else if (randomNum1==randomNum2) msg="Draw!"
else msg="Player 2 wins!"

document.querySelector("h1").innerText=msg

