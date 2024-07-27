





// v2.onclick = function (){
//     document.body.style.backgroundColor = "red";
// }



// const v3 = document.getElementById("b");

// v3.addEventListener('dblclick', () => {
//     alert("you click me")
// })

// function screem (){
//     console.log("done");
// }

// function bruh (){
//     console.log("done2");
// }

// v3.addEventListener("click", bruh);
// v3.addEventListener("click", screem)

const body = document.querySelector("body")
const btn = document.querySelectorAll("button");
const h1= document.querySelectorAll("h1");

const color = function(){
     this.style.backgroundColor = randomcolor();

}

for (let buttons of btn){
    buttons.addEventListener("click", color);

}

for(let h1s of h1){
    h1s.addEventListener("click",color);
}

 
const randomcolor = function() {
    const r = Math.floor(Math.random()* 255 );
    const g = Math.floor(Math.random()* 255 );
    const b = Math.floor(Math.random()* 255 );
    // if(r <30 && g<30 && b<30){
    //     h1.style.color = "white"
    // }
    // else {
    //     h1.style.color = "black"
    // }
    return rgb = `rgb(${r}, ${g}, ${b})`;    

}



