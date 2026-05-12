// Array storage class
let carouselArr = [];

// class Carousel
class Carousel {

    constructor(image, title, url) {
        this.image = image;
        this.title = title;
        this.url = url;
    }

    static Start(arr) {
        if (!arr || arr.length === 0) {
            throw "Method Start need a Array Variable.";
        }

        Carousel._sequence = 0;
        Carousel._size = arr.length;
        Carousel.Next();
        Carousel._interval = setInterval(() => {
            Carousel.Next();
        }, 5000); 
    }

    static Next() {
        let item = carouselArr[Carousel._sequence];

        let carouselDiv = document.getElementById("carousel");
        carouselDiv.style.backgroundImage = `url(img/${item.image})`;
        carouselDiv.style.backgroundSize = "cover";
        carouselDiv.style.backgroundPosition = "center";

        let titleDiv = document.getElementById("carousel-title");
        titleDiv.innerHTML = `<a href="${item.url}">${item.title}</a>`;

        Carousel._sequence++;
        if (Carousel._sequence >= Carousel._size) {
            Carousel._sequence = 0;
        }
    }
      static Next() {
        Carousel._sequence++;
        if (Carousel._sequence >= Carousel._size) Carousel._sequence = 0;
        Carousel.Update();
    }

    static Prev() {
        Carousel._sequence--;
        if (Carousel._sequence < 0) Carousel._sequence = Carousel._size - 1;
        Carousel.Update();
    }

    static Update() {
        let item = carouselArr[Carousel._sequence];
        let carouselDiv = document.getElementById("carousel");
        carouselDiv.style.backgroundImage = `url(img/${item.image})`;
        
        let titleDiv = document.getElementById("carousel-title");
        titleDiv.innerHTML = `<a href="${item.url}" style="color:white; text-decoration:none;">${item.title}</a>`;
    }

    

}