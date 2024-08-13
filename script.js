console.log("welcome to js")

let startBtn = document.querySelector(".start-btn");
let newBtn = document.querySelector(".new-btn");
let resetBtn = document.querySelector(".reset-btn");
let winPara = document.querySelector(".winPara");
let boxes = document.querySelectorAll(".box");


let Allinput = document.querySelectorAll("input");
var player="playerX";
for(let input of Allinput){
    input.addEventListener("change",(evt)=>{
        player = evt.target.id;
        console.log(player)
    })
}

startBtn.addEventListener("click",(evt)=>{
    startBtn.parentElement.style.display="none";
    resetBtn.parentElement.classList.remove("display")

})

let winPattern = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
]
let boxDisabled=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
let checkWinner=()=>{
    for(let arr of winPattern){
        let pat1 = boxes[arr[0]].innerText;
        let pat2 = boxes[arr[1]].innerText;
        let pat3 = boxes[arr[2]].innerText;

        if(pat1!="" && pat2!="" && pat3!=""){
            if(pat1 === pat2 && pat2 === pat3){
                if(pat1 ==="X"){
                    winPara.innerText=`Congratulations , Player ${pat1} Winner`;
                    winPara.style.color="red";
                }else{
                    winPara.innerText=`Congratulations , Player ${pat1} Winner`;
                    winPara.style.color="red";
                }
                boxDisabled()
            }
        }
    }
}
for(let box of boxes){
    box.addEventListener("click",(evt)=>{
        if(player==="playerX"){
            box.innerText = "X";
            player="playerO";
            box.style.backgroundColor="red";
        }else{
            box.innerText = "O";
            player="playerX";
            box.style.backgroundColor="blue";
        }
        box.disabled=true;
        box.style.color="white";
        checkWinner()
    })
}

resetBtn.addEventListener("click",(evt)=>{
    for(let box of boxes){
        box.innerText="";
        box.style.backgroundColor="white";
        box.disabled=false;
    }
    winPara.innerText="";
})
newBtn.addEventListener("click",(evt)=>{
    location.reload()
})
