let preferredGrid
let takenGrid


preferredGrid = prompt("Enter a number between 1 and 64");

if(typeof preferredGrid !== 'number' || preferredGrid <= 1 || preferredGrid >= 64){
    throw new Error('Input must be a NUMBER between 1 and 64');
}

takenGrid = parseInt(preferredGrid);

