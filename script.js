const inputElement = document.querySelector('input');
console.log("inputElement", inputElement)
const buttonElement = document.querySelector('button');
console.log("buttonElement", buttonElement)
const resultElement = document.querySelector('p');
console.log("resultElement", resultElement)

let newArray = [];

function perfectNumber(){
    console.log('perfectFunction')
    const input = inputElement.value;
    const length = input.length;
    
}

buttonElement.addEventListener('click',()=>{
    const input = inputElement.value;
    let newArray = [];
    for(i=1; i < input; i++){
        if(!(input % i)){
            newArray.push(i) 
        }else{continue}
    }
    console.log("newArray", newArray)
    const sum = newArray.reduce((total,num) =>(total+num) )
    console.log("sum", sum)
    if(input == sum){
        resultElement.innerText = 'Perfect Number' 
    }else{
        resultElement.innerText = 'Not A Perfect Number'}
    
})
