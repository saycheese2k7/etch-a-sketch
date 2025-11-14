let preferredGrid
let takenGrid


preferredGrid = prompt("Enter a number between 1 and 64");

if(typeof preferredGrid !== 'number' || preferredGrid <= 1 || preferredGrid >= 64){
    throw new Error('Input must be a NUMBER between 1 and 64');
}

takenGrid = parseInt(preferredGrid);

const verticalCont = document.getElementById('vertcontainer')

for(let i = 0; i <= takenGrid; i++){
    const horizontalDiv = document.createElement('div')
    horizontalDiv.classList.add('hrzdiv')
    horizontalDiv.style.display('inline-block')
    horizontalDiv.style.padding('5px')
    horizontalDiv.style.

    verticalCont.appendChild(horizontalDiv)
}

//repeat this process to create another dimension on this. use the takengrid variable as counter.