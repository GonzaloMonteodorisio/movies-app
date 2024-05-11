
document.addEventListener("DOMContentLoaded" , () => {
    fetchData()
})

const fetchData = async () => {
    
    try {
        loadingData(true)
        
        const res = await fetch("https://www.omdbapi.com/?s=year&apikey=73382656")
        const data = await res.json()
        pintarCard(data)
        
    } catch (error) {
        console.log(error)
    } finally{
        loadingData(false)
    }
}


const pintarCard = data => {
    const peliculas = document.querySelector(".peliculas")
    const templateCard = document.querySelector("#template-card").content
    const fragment = document.createDocumentFragment()
    
    data.Search.forEach(item => {
        
        const clone = templateCard.cloneNode(true)
        clone.querySelector("h3").textContent = item.Title
        clone.querySelector("p").textContent = item.Year
        clone.querySelector("img").setAttribute("src", item.Poster)
        
        //guardamos en el fragment para evitar el reflow
        fragment.appendChild(clone)
    });
    peliculas.appendChild(fragment)
}

const loadingData= (estado)=> {
    const loading = document.getElementById("loading")
    if(estado){
        loading.classList.remove("d-none")
    }else{
        loading.classList.add("d-none")
    }
}
