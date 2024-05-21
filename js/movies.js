document.addEventListener("DOMContentLoaded", () => {
    fetchData();
    document.getElementById("house-filter").addEventListener("change", filterCards);
});

const fetchData = async () => {
    try {
        loadingData(true);
        const res = await fetch("https://hp-api.onrender.com/api/characters");
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
        clone.querySelector("h3").textContent = item.name;
        clone.querySelector("img").setAttribute("data-src", item.image);
        clone.querySelector("img").setAttribute("alt", item.name);
        clone.querySelector("p").textContent = `Casa: ${item.house}`;
        clone.querySelector("span").textContent = `${item.gender === 'male' ? `Actor: ${item.actor}` : `Actriz: ${item.actor}`}`;
        clone.querySelector(".pelicula").dataset.house = item.house;
        fragment.appendChild(clone);
    });
    personajes.appendChild(fragment);
    lazyLoadImages();
};

const filterCards = () => {
    const filter = document.getElementById("house-filter").value;
    const cards = document.querySelectorAll(".pelicula");
    cards.forEach(card => {
        if (filter === "all" || card.dataset.house === filter) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
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



/*
document.addEventListener("DOMContentLoaded" , () => {
    fetchData()
})

const fetchData = async () => {
    
    try {
        loadingData(true)
        const res = await fetch("https://hp-api.onrender.com/api/characters")
        const data = await res.json()
        console.info('data: ', data)
       pintarCard(data)
        
    } catch (error) {
        console.log(error)
    } finally{
        loadingData(false)
    }
}


const pintarCard = data => {
    const personajes = document.querySelector(".personajes")
    const templateCard = document.querySelector("#template-card").content
    const fragment = document.createDocumentFragment()
    
    data.forEach(item => {
        const clone = templateCard.cloneNode(true)
        clone.querySelector("h3").textContent = item.name
        clone.querySelector("img").setAttribute("src", item.image)
        clone.querySelector("img").setAttribute("alt", item.name)
        clone.querySelector("img").setAttribute("height", "200px")
        if (item?.house || item?.house !== '') {

            clone.querySelector("p").textContent = `Casa: ${item.house}`
        }
        clone.querySelector("span").textContent = `${item.gender === 'male' ? `Actor: ${item.actor}` : `Actriz: ${item.actor}`}`
        

        
        
        fragment.appendChild(clone)
    });
    personajes.appendChild(fragment)
}

const loadingData= (estado)=> {
    const loading = document.getElementById("loading")
    if(estado){
       loading.classList.remove("d-none")
   }else{
       loading.classList.add("d-none")
   }
}
*/