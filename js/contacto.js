// document.addEventListener('DOMContentLoaded', function() {
//     const selectCasa = document.getElementById('casa');

//     // Función para obtener las casas de Hogwarts desde la API
//     fetch('https://www.potterapi.com/v1/houses?key=$2a$10$...')
//         .then(response => response.json())
//         .then(data => {
//             console.log(fetch)
//             data.forEach(house => {
//                 const option = document.createElement('option');
//                 option.value = house.name.toLowerCase();
//                 option.textContent = house.name;
//                 selectCasa.appendChild(option);
//             });
//         })
//         .catch(error => console.error('Error:', error));
// });
