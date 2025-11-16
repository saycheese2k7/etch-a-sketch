let preferredGrid
let takenGrid


preferredGrid = prompt("Enter a number between 1 and 64");

/*if(typeof preferredGrid !== 'number' || preferredGrid <= 1 || preferredGrid >= 64){
    throw new Error('Input must be a NUMBER between 1 and 64');
}*/

takenGrid = parseInt(preferredGrid);

const verticalCont = document.getElementById('mainbox')

for(let i = 0; i < takenGrid; i++){
    let horizontalDiv = document.createElement('div');
    horizontalDiv.classList.add('hrzdiv');
    horizontalDiv.style.display = 'flex';
    horizontalDiv.style.flexDirection = 'column';
    horizontalDiv.style.flex = '1';
    horizontalDiv.style.gap = '0';
    horizontalDiv.style.justifyContent = 'space-between';
    horizontalDiv.style.height = 'calc(100%/$(takenGrid))';


    verticalCont.appendChild(horizontalDiv)
}


const horizontalConts = document.querySelectorAll('.hrzdiv')

horizontalConts.forEach((horizontalCont) => {

for(let j = 0; j < takenGrid; j++){

    let verticalDiv = document.createElement('div')
    verticalDiv.classList.add('hrzdiv')
    verticalDiv.style.display = 'flex'
    verticalDiv.style.flexDirection = 'column'
    verticalDiv.style.flex = '1'
    verticalDiv.style.gap = '0'
    verticalDiv.style.justifyContent = 'space-between'
    verticalDiv.style.height = '20px'


    horizontalCont.appendChild(verticalDiv)
};
});