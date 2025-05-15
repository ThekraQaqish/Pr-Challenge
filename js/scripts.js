let counter = 0;

function updatecounter(){
    document.getElementById("counterDisplay").textContent = counter;

}

function incrementCounter(){
    counter++;
    updatecounter();
    console.log("increment counter clicked")
}

function decrementCounter(){
    counter--;
    updatecounter();
    console.log("decrement counter clicked")

}

function reset(){
    counter=0;
    updatecounter();
    console.log("reset clicked")

}

function initialValue(){
    const x =document.getElementById("initialValue");
    counter =x.value;
    updatecounter();
}


document.getElementById("incrementButton").addEventListener('click',incrementCounter)
document.getElementById("decrementButton").addEventListener('click',decrementCounter)
document.getElementById("resetButton").addEventListener('click',reset)
document.getElementById("saveValue").addEventListener('click',initialValue)

