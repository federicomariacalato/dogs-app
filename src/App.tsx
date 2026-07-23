import "./App.css";
import { DogCard } from "./homePage/DogCard";
import Hero from "./homePage/Hero";

function App() {
  return (
    <>
      <Hero />
      <div className="p-20">
        <DogCard
          imgSrc="https://www.viridea.it/wp-content/uploads/2008/04/Golden-Retriever.jpg"
          paragraph="Questa è la popolarissima razza Golden Retriver"
          title="Golden Retriever"
        />
      </div>
    </>
  );
}

export default App;
