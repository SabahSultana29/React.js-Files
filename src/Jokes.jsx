import { useEffect, useState } from "react";

export default function Jokes() {
  let [joke, setnewJoke] = useState({});
  const URL = "https://official-joke-api.appspot.com/random_joke";
  const newJoke = async () => {
    let response = await fetch(URL);
    let jsonResponse = await response.json(); //API Call
    console.log(jsonResponse);

    setnewJoke({
      setup: jsonResponse.setup,
      punchline: jsonResponse.punchline,
    });
  };

  useEffect(() => {
    async function printFirstJoke() {
      let response = await fetch(URL);
      let jsonResponse = await response.json(); //API Call
      console.log(jsonResponse);

      setnewJoke({
        setup: jsonResponse.setup,
        punchline: jsonResponse.punchline,
      });
    }
    printFirstJoke();
  }, []);
  return (
    <div>
      <h3>Random Jokes</h3>
      <h4>{joke.setup}</h4>
      <h4>{joke.punchline}</h4>
      <button onClick={newJoke}>Generate Joke</button>
    </div>
  );
}
