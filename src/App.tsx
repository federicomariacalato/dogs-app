import "./App.css";
import Hero from "./homePage/Hero";
import { DogCard } from "./homePage/DogCard";
import { useState, useEffect } from "react";
import getBreedList, { getBreedImage } from "./data/dog.service";


export type Breed = {
    breed: string;
    subBreeds: any;
    imgSrc?: string;
  }

function App() {
  const [breeds, setBreeds] = useState<Breed[]>([])

  useEffect(() => {
     getBreedList().then(async (value) => {
        console.log(value)
        for (let index = 0; index < value.length; index++) {
          const element = value[index];
          element.imgSrc = await getBreedImage(element.breed)
        }
        setBreeds(value)
      })
  },[])

  return (
    <>
      <Hero>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {breeds.map((breed) => (<DogCard
            imgSrc={breed.imgSrc ?? "https://www.viridea.it/wp-content/uploads/2008/04/Golden-Retriever.jpg"}
            title={breed.breed}
            key={breed.breed}
            paragraph={`Questa è la popolarissima razza ${breed.breed}.`}
          />))}
        </div>
      </Hero>
    </>
  );
}

export default App;