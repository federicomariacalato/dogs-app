
// DATA
// function getRandomImage (){
//     return fetch("https://dog.ceo/api/breeds/image/random")
//     .then(response => response.json())
//     .then(data => data.message)
// }

import type { Breed } from "../App"

function getBreedList():Promise<Breed[]>{
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

export function getBreedImage(breed:string){
    return fetch (`https://dog.ceo/api/breed/${breed}/images`)
    .then(response => response.json())
    .then(data => data.message[0])
}


export default getBreedList