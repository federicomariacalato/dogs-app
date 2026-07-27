
// DATA
// function getRandomImage (){
//     return fetch("https://dog.ceo/api/breeds/image/random")
//     .then(response => response.json())
//     .then(data => data.message)
// }

function getBreedList(){
    return fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json())
    .then(json => {
        return Object.keys(json.message).map((value) => {
            return {
                breed: value,
                subBreeds: json.message[value]
            }
        })
})
}

export default getBreedList