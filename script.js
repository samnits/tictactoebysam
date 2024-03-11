console.log("Welcome to my game tic tac toe");
let audioTurn=new Audio("ting.mp3")
let gameover= new Audio("gameover.mp3")
let turn="X"
let isgameover=false;
// Changing the turn 

const changeTurn=()=>{
    return turn=== "X"? "0":"X"
}

// function to check for the win
const checkWin=()=>{
     let boxtext=document.getElementsByClassName("boxtest");
     let wins= [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6 ],
    ]
    wins.forEach(e=>{
        if(boxtext[e[0]].innerText===boxtext[e[1]].innerText && boxtext[e[2]].innerText===boxtext[e[1]].innerText && boxtext[e[0]].innerText!==""){
            document.querySelector('.info').innerText=  boxtext[e[0]].innerText + " Won"
            isgameover=true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
        }
    })
}

// game logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtest=element.querySelector('.boxtest');
    element.addEventListener('click',()=>{
        if(boxtest.innerText===''){
            boxtest.innerText=turn;
            turn=changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText="Turn for "+ turn;
            }
            else{
                let boxtexts=document.querySelectorAll('.boxtest');
                Array.from(boxtexts).forEach(element=>{
                    element.innerText= ""
                }); 
                
            }
        }
    })
})
let phir=document.getElementById("reset")
phir.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtest');
    Array.from(boxtexts).forEach(element=>{
        element.innerText= ""
    });
    turn="X";
    isgameover=false
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"

})