import Header from "./components/Header"
import { apiKey, trendingShows } from "./modules/ApiLinks"

function App() {

  const url = `${trendingShows}?api_key=${apiKey}`
  interface Movie {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
    //for tv shows
    


  }


  fetch(url).then(response => response.json()).then((data) => console.log(data))
  return (
    <>

      <h1>sdasddasasd</h1>
      <header>sdds</header>
      <Header />

    </>
  )
}

export default App
