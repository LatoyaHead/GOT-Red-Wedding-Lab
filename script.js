const btn1 = document.getElementById('add-child')
const btn2 = document.getElementById('red-wedding')
const div = document.querySelector('.starks')

btn1.addEventListener('click', addChild)
btn2.addEventListener('click', redWedding)

// Create Two Functions -> addChild and redWedding
function addChild() {
  const div2 = document.createElement('div') 
  div2.textContent = 'DIV'
  div.appendChild(div2)
}
function redWedding() {
  const children = div.querySelectorAll('div')
  const list = Array.from(children)
  list.map(list => list.remove())
}

function usingForLoop(){ //create function for the for loop
  const children = div.querySelectorAll('div') //return each child from the parent(div) ALL to select all divs or elements
  for(let i = 0; i < children.length; i++){
    children[i].remove() //children is an array 
  }
}

// Attach functions to buttons

// The addChild function creates new div & appends it to the starks div

// The redWedding function removes ALL stark children (loop)
