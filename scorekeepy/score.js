const span1 = document.querySelector("#player1");
const span2 = document.querySelector("#player2");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const score =  document.querySelector("#score");
const value = parseInt(score.value); // Convert score.value to a number
let player1 = 0;
let player2 = 0;

btn1.addEventListener("click", ()=>{
    const value = parseInt(score.value); // Convert score.value to a number
    
     if (player1!== value){
         player1++;
         span1.innerText = player1;
         console.log(value)
        if(player1 === value ){
            span1.style.color = "green";
            span2.style.color= "red"
            btn1.disabled = true;
            btn2.disabled = true;
            
        }

     }

 })

 btn2.addEventListener("click", ()=>{
    const value = parseInt(score.value, 10); // Convert score.value to a number
    
     if (player2 !== value){
         player2++;
         span2.innerText = player2;
         console.log(value)
        if(player2=== value ){
            span2.style.color = "green";
            span1.style.color= "red"
            btn1.disabled = true;
            btn2.disabled = true;
            
        }

     }

 })

 score.addEventListener("change", ()=>{
    reset();
 }) 


btn3.addEventListener("click", reset)

function reset(){
    player1 = 0;
    player2 = 0;    
    span1.style.color = "black";
    span2.style.color = "black";
    span1.innerText = player1;
    span2.innerText = player2;
    btn1.disabled = false;
    btn2.disabled = false;
}