const container = document.getElementById("container");

const basedUrl= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";


for (let i=1; i<=1100; i++){
    const newdiv = document.createElement("div")
    const newimg = document.createElement("img");
    const number = document.createElement("Span")   
    newimg.src = `${basedUrl}${i}.png`;
    number.innerText = `${i}`;  
    newdiv.append(newimg, number);
    container.append(newdiv)
    
}   