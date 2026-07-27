import "./App.css";
import Hero from "./homePage/Hero";
import { DogCard } from "./homePage/DogCard";
import { useState, useEffect } from "react";
import getBreedList from "./data/dog.service";


type Breed = {
    breed: string;
    subBreeds: any;
  }

function App() {
  const [breeds, setBreeds] = useState<Breed[]>([])
  const [error, setError] = useState()

  useEffect(() => {
     getBreedList().then((value) => {
        console.log(value)
        setBreeds(value)
      })
  },[])

  return (
    <>
      <Hero />
      {breeds.map((breed) => (<DogCard
        imgSrc="https://www.viridea.it/wp-content/uploads/2008/04/Golden-Retriever.jpg"
        title={breed.breed}
        paragraph={`Questa è la popolarissima razza ${breed.breed}.`}
      />))}
    </>
  );
}

export default App;