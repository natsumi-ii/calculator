const buttonElements = document.getElementsByClassName('button');
const addButton = document.getElementById('add');
const subButton = document.getElementById('substract');
const finishButton = document.getElementById('finish');
const total = document.getElementsByClassName('total')[0];
let current_sum = 0
let first = '';
let second = '';
let operator_sum = null;
let operator_substract = null;
let operator_finish = null;
let result = '';



console.log(document);

// //console.log('buttonElements', buttonElements)
// for (let i = 0; i < buttonElements.length; i++) {
//     const ele = buttonElements[i]
//     ele.addEventListener('click', function (event) {
//         console.log('iis clicked', i)
//         ele.textContent = i % 2 === 0 ? '◯' : 'x'
//     })
// }
console.log('loading')
a = () => console.log('loading b')
console.log('buttonElements', buttonElements)

addButton.addEventListener('click', (event) => {
    operator_sum = '+'
    console.log('operator_sum', operator_sum)
})

subButton.addEventListener('click', (event) => {
    operator_substract = '-'
    console.log('operator_substract', operator_substract)
})

finishButton.addEventListener('click', (event) => {
    operator_finish = '='
    console.log('operator_finish', operator_finish)
})

for (let i = 0; i < 9; i++) {
    buttonElements[i].addEventListener('click', (event) => {
        const string = event.target.innerText
        // const value = parseInt(string)
        if (operator_sum) {
            second += string
            result = parseInt(first) + parseInt(second)
            console.log('first, second', first, second)
            // console.log('parseInt(first) + parseInt(second)', parseInt(first) + parseInt(second))
            console.log('result', result)


        } else if (operator_substract) {
            second += string
            result = parseInt(first) - parseInt(second)
            console.log('result', result)
        } else {
            first += string
        }

        // console.log('string', string, string + string)
        // console.log('value', value, value + value)
        // console.log('first', first)
        // console.long('second', second)
        // console.log('result', resul
               total.innerText = result


    })

}

// if (operator_finish) {
//     total.innerText = result

//     }
    // buttonElements[4].addEventListener('click', (event) => {
    //     const string = event.target.innerText
    //     // const value = parseInt(string)
    //     if (operator) {
    //         second += string
    //         result = parseInt(first) + parseInt(second)
    //         console.log('first, second', first, second)
    //         // console.log('parseInt(first) + parseInt(second)', parseInt(first) + parseInt(second))
    //         console.log('result', result)


    //     } else {
    //         first += string
    //     }

    // console.log('string', string, string + string)
    // console.log('value', value, value + value)
    // console.log('first', first)
    // console.long('second', second)
    // console.log('result', resul

    //     total.innerText = result

    // })
    // ele.addEventListener('click', function (event) {
    //     console.log(i)nnnn
    console.log('total', total)
    a = [1]

// total.textContent = 'result'

// }

// if 








