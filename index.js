<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Simple Slider</title>

<style>
body {
    margin: 0;
    font-family: Arial, sans-serif;
}

.slider {
    position: relative;
    max-width: 800px;
    margin: 40px auto;
    overflow: hidden;
    border-radius: 10px;
}

.slides {
    display: flex;
    transition: transform 0.5s ease-in-out;
}

.slides img {
    width: 100%;
    height: 400px;
    object-fit: cover;
}

/* Buttons */
.prev, .next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0,0,0,0.5);
    color: white;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    border-radius: 50%;
}

.prev { left: 10px; }
.next { right: 10px; }

</style>
</head>

<body>

<div class="slider">
    <div class="slides">
        <img src="https://picsum.photos/id/1015/800/400">
        <img src="https://picsum.photos/id/1016/800/400">
        <img src="https://picsum.photos/id/1018/800/400">
    </div>

    <button class="prev">&#10094;</button>
    <button class="next">&#10095;</button>
</div>

<script>
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');

let index = 0;

document.querySelector('.next').onclick = () => {
    index = (index + 1) % images.length;
    updateSlide();
};

document.querySelector('.prev').onclick = () => {
    index = (index - 1 + images.length) % images.length;
    updateSlide();
};

function updateSlide() {
    slides.style.transform = `translateX(-${index * 100}%)`;
}
</script>

</body>
</html>
