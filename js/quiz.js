let name = prompt("What is your name");

if(name === null || name === ""){
    document.write(`Thanks for your time`)
}
else{

const array = [
    ["Which famous scientist introduced the idea of natural selection?","Charles Darwin"],
    ["A person who studies biology is known as a?","Biologist"],
    [" Botany is the study of?","Plants"],
    [" Can frogs live in salt water?","No"]
]



let counter = 0;

for(let i = 0; i < array.length; i++){
   response = window.prompt(`Dear ${name}, ${array[i][0]}`)
   if(response === null || response === ""){
       document.write(`Thanks for your time`);
       break;
   }
    else if(response.toUpperCase() === array[i][1].toUpperCase()){
        counter++;
        console.log(response.toUpperCase());
        console.log(counter)
    }
    else if(response.toUpperCase() === "Q"){
        break;
    }
    
}
document.write(`${name}, your final score is ${counter}/${array.length}`)
}