const form = document.querySelector("#k");
const input1 = document.querySelector("#shelter");
const input2 = document.querySelector("#shelter2");
const list = document.querySelector("#list");
form.addEventListener("submit", (event) =>{

    event.preventDefault();
    // const input = input1.value;
    // const input3 = input2.value;

    yown(input1, input2);
 
})  

const yown = ((input1, input2) =>{
    const li = document.createElement("li");
    li.innerText = `${input1.value} ${input2.value}` ;
    list.append(li);    
    console.log(li);

    input1.value = "";
    input2.value = "";
})