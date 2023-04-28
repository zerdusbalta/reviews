import { useState } from "react";
import Content from "./Content";
import Header from "./Header";
import reviews from "./data";

function App() {

  const [number, setNumber] = useState(0)

  function decrease(){
    setNumber(prev => prev > 0 ? prev - 1 : prev)
  }

  function increase(){
    setNumber(prev => prev < 3 ? prev + 1 : prev)
  }

  function random(){
    let randomNum = Math.floor(Math.random() * 4)
    setNumber(randomNum)
  }

  return (
    <main>
      <Header />
      <section>
        <Content image={reviews[number].image} name={reviews[number].name} job={reviews[number].job} text={reviews[number].text} back={decrease} next={increase} surprise={random} />
      </section>
    </main>
  );
}

export default App;