// button click
const pixel16 = document.querySelector('.pixel-16');
const pixel32 = document.querySelector('.pixel-16');
const pixel64 = document.querySelector('.pixel-16');


function pixelSelection (e) {
    e.target.style.backgroundColor = 'blue';
    console.log(e.target);
}

//this is a comment test
pixel16.addEventListener('click',pixelSelection);
pixel32.addEventListener('click',pixelSelection);
pixel64.addEventListener('click',pixelSelection);


// change all button borders back to none
// button border gets changed 
// canvas gets updated

