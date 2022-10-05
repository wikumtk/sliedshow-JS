let heading = document.getElementsByTagName('title');
heading[0].innerText = 'Simple Slide Show';

let i = 0;
let images = [];
let time = 3000;

images.push('pictures/image-1.jpg','pictures/image-2.jpg','pictures/image-3.jpg');

console.log(images);


function slideImages(){
   
    document.getElementsByTagName('img')[0].src = images[i];    
    if(i < images.length - 1){i++;}else{i=0;}   

    setTimeout('slideImages()',time);

}

window.onload =slideImages;


for ( let i=0; i<5; i++){
    console.log(i);
    setTimeout(1000);
}


