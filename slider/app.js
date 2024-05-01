let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.getElementById('.carousel');
let listItemsDom = document.getElementById('.carousel .list');
let thumbnailDom = document.getElementById('.carousel .thumbnail');

nextDom.onclick = function(){
     showSlider('next');
}
prevDom.onclick = function(){
     showSlider('prev');
}
let timeRunning =3000;
let timeAutoNext =7000;
let runTimeOut;
let runAutoRun =setTimeout(() =>{
    nextDom.click();

},timeAutoNext);
function showSlider (type){
    let itemSlider = document.getElementById('.carousel .list .items');
    let itemThumbnail = document.getElementById('.carousel .thumbnail .items');

    if(type === 'next'){
        listItemsDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add('next');
    }else{
        let positionLastItem = itemSlider.length -1;
        listItemsDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() =>{
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    } ,timeRunning)
    clearTimeout(runAutoRun);
    runAutoRun=setTimeout(() =>{
        nextDom.click();
   
    },timeAutoNext);
}




