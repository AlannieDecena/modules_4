function calculator() {
    //defining and connecting the buttons
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btns', '.cal-btns');
    let clear = document.querySelector('.clear-btns');
    let equals = document.querySelector('.equals-btns');

    //making a foreach function to be able to display each buttons
    buttons.forEach(function(button) {
        //adding addEventListener() to 'button' and function so it knows what to do when a button is 'clicked'
        button.addEventListener('click', function(i){
            //grabing the values stored in the data-num
            let value = i.target.dataset.num;
            //displaying the said values on the screen
            screen.value += value;
        })
        })
        //adding addEventListener() to 'equals' and function
        equals.addEventListener('click', function(){
            //setting a else if condition when the screen is empty display empty value
            if (screen.value === '') {
                screen.value = '';    
            } else { // dose calculations for you but eval(bad)
                let result = eval(screen.value);
                screen.value = result;
            }
        //adding addEventListener() to 'clear' and function so the value on the screen is empty
        clear.addEventListener('click', function(i) {
            screen.value = '';
    })
    })
}
calculator()