const grid = document.querySelector('grid')
const start = document.getElementById('start')
const score = document.getElementById('score')
let squares = []
let currentSnake = [2, 1, 0
]

function createGrid() {
    //🍋create 100 of these elements with a for loop
    //Let i be equal to 0; As long as i is smaller then 100; increment by 1;
    for(let i = 0; i < 100; i++ ){
        //🍋create element
        //hod createElement() and store it in a cont
        const square = document.createElement('div')
        //🍋add styling to the element 
        //Make a class with square and style it in your css with the method classList.add() you implement that style via javascript
        square.classList.add('square')
        //🍋put the element into our grid 
        // Use the method appendChild() to add it to an existing element (div)
        // First name the element that will be holding the children, then add the method with the child as a parameter.
        grid.appendChild('square')
        //🍋push it into a new squares array 
        //Make chore you have a variable that is storing an empty array like this (let square = [] so we can store the divs in this array. We do just that with the array method push()
        squares.push('square')
    }
}
//Finally you have to call the function outside the scope {the function body}.
createGrid()

currentSnake.forEach(index => squares[index].classList.add('snake'))

