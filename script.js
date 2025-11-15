let preferredGrid
let takenGrid


preferredGrid = prompt("Enter a number between 1 and 64");

/*if(typeof preferredGrid !== 'number' || preferredGrid <= 1 || preferredGrid >= 64){
    throw new Error('Input must be a NUMBER between 1 and 64');
}*/

takenGrid = parseInt(preferredGrid);

const verticalCont = document.getElementById('mainbox')

for(let i = 0; i < takenGrid; i++){
    let horizontalDiv = document.createElement('div')
    horizontalDiv.classList.add('hrzdiv')
    horizontalDiv.style.display = 'flex'
    horizontalDiv.style.flexDirection = 'row'
    horizontalDiv.style.flex = '1'
    horizontalDiv.style.gap = '0'
    horizontalDiv.style.justifyContent = 'space-between'
    horizontalDiv.style.height = '20px'


    verticalCont.appendChild(horizontalDiv)
}

//repeat this process to create another dimension on this. use the takengrid variable as counter.