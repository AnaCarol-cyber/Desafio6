let carouselArr = [];

class Carousel {
    constructor(image, title, url) {
        this.image = image;
        this.title = title;
        this.url = url;
    }

    static Start(arr) {
        if (!arr || arr.length === 0) throw "Method Start needs an Array Variable.";

        Carousel._sequence = 0;
        Carousel._size = arr.length;
        Carousel.Update();
        Carousel.RenderDots();

        Carousel._interval = setInterval(() => {
            Carousel.Next();
        }, 5000);
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

    static GoTo(index) {
        Carousel._sequence = index;
        Carousel.Update();
    }

    static Update() {
        let item = carouselArr[Carousel._sequence];
        let carouselDiv = document.getElementById("carousel");
        carouselDiv.style.backgroundImage = `url(img/${item.image})`;
        carouselDiv.style.backgroundSize = "contain"; 
        carouselDiv.style.backgroundRepeat = "no-repeat";
        carouselDiv.style.backgroundPosition = "center";

        let titleDiv = document.getElementById("carousel-title");
        titleDiv.innerHTML = `<a href="${item.url}" style="color:white; text-decoration:none;">${item.title}</a>`;

       
        document.querySelectorAll(".dot").forEach((dot, i) => {
            dot.classList.toggle("active", i === Carousel._sequence);
        });
    }

    static RenderDots() {
        let dotsContainer = document.createElement("div");
        dotsContainer.className = "dots";
        for (let i = 0; i < Carousel._size; i++) {
            let dot = document.createElement("span");
            dot.className = "dot";
            dot.onclick = () => Carousel.GoTo(i);
            dotsContainer.appendChild(dot);
        }
        document.getElementById("carousel").appendChild(dotsContainer);
    }
}
