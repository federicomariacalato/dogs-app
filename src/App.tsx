import "./App.css";
import Hero from "./homePage/Hero";
import { DogCard } from "./homePage/DogCard";

function App() {
  return (
    <Hero>
      <DogCard
        imgSrc="https://www.viridea.it/wp-content/uploads/2008/04/Golden-Retriever.jpg"
        title="Golden Retriever"
        paragraph="Questa è la popolarissima razza Golden Retriever."
      />
    </Hero>
  );
}

export default App;