'use strict';
//Buton class is class="label-number"
//Input class is class="fibo"


//We have created the fibbonaci nth calculator logic

const fibonacci = (n) => {
    if (n <= 1) {
        return n
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2)
    }
}

//We have implemented the DOM functions and we have added a event for the
//button click which gets the value from the input field and places it into
//fibonacci function. Then this is rendered to the DOM if the value from the
//input field is in the range implemented in the if statement
document.querySelector('.FiboButton').addEventListener('click', function() {
    const fibo = Number(document.querySelector('.fibo').value)
    const fiboNth = fibonacci(fibo)

    if(!fibo) {
        return document.querySelector('.label-number').textContent = 'No number yet';
    } else if(fibo >= 1 && fibo <= 25) {document.querySelector('.label-number').textContent = 'Your number is ' + fiboNth;
} else {
    return document.querySelector('.label-number').textContent = 'Number is to big';
}
    
})

//We have implemented the DOM functions and we have added a event for the
//enter event which gets the value from the input field and places it into
//fibonacci function. Then this is rendered to the DOM if the value from the
//input field is in the range implemented in the if statement

document.querySelector('.fibo').addEventListener("keyup", function(event) {
    
    if (event.key === "Enter") {
        const fiboEnter = Number(document.querySelector('.fibo').value)
        const fiboNth = fibonacci(fiboEnter)
        console.log(fiboEnter)
        if(!fiboEnter) {
            return document.querySelector('.label-number').textContent = 'No number yet';
        } else if(fiboEnter >= 1 && fiboEnter <= 25) {document.querySelector('.label-number').textContent = 'Your number is ' + fiboNth;
    } else {
        return document.querySelector('.label-number').textContent = 'Number is to big';
    }
    } 
})

