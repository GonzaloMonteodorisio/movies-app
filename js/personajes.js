document.addEventListener("DOMContentLoaded", () => {
    fetchData();
    document.getElementById("house-filter").addEventListener("change", filterCards);
});

const fetchData = async () => {
    try {
        loadingData(true);
        const res = await fetch("https://harry-potter-api.onrender.com/personajes");
        const data = await res.json();
        console.info('data: ', data);
        pintarCard(data);
    } catch (error) {
        console.log(error);
    } finally {
        loadingData(false);
    }
};

const pintarCard = data => {
    const personajes = document.querySelector(".personajes");
    const templateCard = document.querySelector("#template-card").content;
    const fragment = document.createDocumentFragment();

    data.forEach(item => {
        const clone = templateCard.cloneNode(true);
        clone.querySelector("h3").textContent = item.personaje;
        clone.querySelector("img").setAttribute("data-src", item.imagen);
        clone.querySelector("img").setAttribute("height", "250px");
        clone.querySelector("img").setAttribute("alt", item.personaje);
        clone.querySelector("p").textContent = `Casa: ${item.casaDeHogwarts}`;
        clone.querySelector(".pelicula").dataset.casaDeHogwarts = item.casaDeHogwarts;
        fragment.appendChild(clone);
    });
    personajes.appendChild(fragment);
    lazyLoadImages();
};

const noElementHasDisplayBlock = (htmlCollection) => {
    for (let i = 0; i < htmlCollection.length; i++) {
      const element = htmlCollection[i];
      if (window.getComputedStyle(element).display === "block") {
        return false;
      }
    }
    return true; 
  }

const filterCards = () => {
    const filter = document.getElementById("house-filter").value;
    const cards = document.querySelectorAll(".pelicula");

    cards.forEach(card => {
        if (filter === "all" || card.dataset.casaDeHogwarts === filter) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
    
    if (noElementHasDisplayBlock(cards)) {
        const personajes = document.querySelector(".personajes");
        const mensaje = document.createElement("h3");
        mensaje.textContent = "Por el momento no hay personajes disponibles para esta casa"
        personajes.appendChild(mensaje);
    }

};

const loadingData = (estado) => {
    const loading = document.getElementById("loading");
    if (estado) {
        loading.classList.remove("d-none");
    } else {
        loading.classList.add("d-none");
    }
};

const lazyLoadImages = () => {
    const lazyImages = document.querySelectorAll(".lazy");
    const config = {
        rootMargin: '0px 0px 50px 0px',
        threshold: 0
    };

    const onIntersection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove("lazy");
                observer.unobserve(img);
            }
        });
    };

    const observer = new IntersectionObserver(onIntersection, config);

    lazyImages.forEach(image => {
        observer.observe(image);
    });
};
