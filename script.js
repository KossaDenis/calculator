
function input(num){
    document.getElementById('display').value = 
    document.getElementById('display').value + num;
}

function equals(){
    let answer =  document.getElementById('display').value
    if(answer){
        document.getElementById('display').value = eval(answer)
    }
}


clear.addEventListener("click", function () {
    display.value = ''
})



