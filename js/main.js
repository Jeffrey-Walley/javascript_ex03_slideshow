let i = 0; // start point
let images = [];
const time = 3000;

// image list

images[0] = './imgs/image1.jfif';
images[1] = './imgs/image2.jfif';
images[2] = './imgs/image3.jfif';
images[3] = './imgs/image4.jfif';
images[4] = './imgs/image5.jfif';
images[5] = './imgs/image6.jfif';

// change images

function changeImg() {
    document.slide.src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    // run function every xxxx ms
    setTimeout("changeImg()", time);
}

// run function when page loads
window.onload = changeImg;