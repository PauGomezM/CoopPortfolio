let display = document.getElementById('display');
display.setAttribute("readonly", true);

//Displays value on display whenever a key is clicked (does not include '=' or 'C' keys)
const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('click', () => {
        const keyValue = key.value;
        const displayValue = document.getElementById('display').value;    
        switch (displayValue){
            case 'undefined':
                document.getElementById('display').value = keyValue;
                break
            case '0':
                if (keyValue != '.'){
                    document.getElementById('display').value = keyValue;
                }else{
                    document.getElementById('display').value = displayValue + keyValue;
                }
                break
            default:
                document.getElementById('display').value = displayValue + keyValue;
        }
    })
})

// Reads if '=' button is clicked, evaluates the equation on display, and displays the result
const equal_sign = document.getElementById('equals');
equal_sign.addEventListener('click', () => {
    const solution = eval(document.getElementById('display').value);
    document.getElementById('display').value = solution;
})

// Reads if 'C' button is clicked and replaces whatever is in the display by an empty string
const erase = document.getElementById('clear');
erase.addEventListener('click', () => {
    document.getElementById('display').value = '';
})


function setNull(){
    const none = '';
    return none;
}