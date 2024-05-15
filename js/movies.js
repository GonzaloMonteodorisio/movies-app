
document.addEventListener("DOMContentLoaded" , () => {
    fetchData()
})
// http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150

/*
const fetchData = async () => {
    
    try {
        // loadingData(true)
        
        const res = await fetch("https://www.omdbapi.com/?s=year&apikey=73382656")
        const data = await res.json()
        pintarCard(data)
        
    } catch (error) {
        console.log(error)
    } finally{
        // loadingData(false)
    }
}
*/

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
        clone.querySelector("p").textContent = `Casa: ${item.house}`
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
