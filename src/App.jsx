import { useEffect, useState } from "react"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Form/Form'
import GiphyImage from './GiphyImage/GiphyImage'

function App() {
  // this is the giph we are searching for
  const [giphName, setGiphName] = useState("yaay");
  // this is where we will store our data after we get it from the api
  const [giphyInfo, setGiphyInfo] = useState({});

  // Make an api call when the component 
  // is loaded we want to make an api call to find the 'lol' giph info
  useEffect(() => {
    // console.log('use effect is running')
    const giphURL = `https://api.giphy.com/v1/gifs/random?api_key=4xWH2BIbnFV5sSXTC7IdyKYIyWkMH4a2&tag=${giphName}&rating=g`;

    async function getGiph() {
      try {
        // this makes our request
        const response = await fetch(giphURL);
        const data = await response.json(); // <- this line will take the json from the api call that we reserved
        // and turn into a javascript object that we can use!
        console.log(data);
        setGiphyInfo(data)
      } catch (err) {
        console.log(err);
      }
    }

    getGiph() // call the function
    // empty array says, Run this effect when the component loads and is mounted onto the DOM
  }, [giphName])

  function liftGiphName(name){
    // Pass the function down to lift  up the state, and then make sure you update the giphName in App components state
    setGiphName(name)
  }

  return (
    <>
      <h1>This is my App component!</h1>
      <Form liftGiphName={liftGiphName}/>
      <br />
      <br />
      <GiphyImage giphyInfo={giphyInfo}/>
    </>
  );
}

export default App;