import { DisplayItems } from "./components/Displayitems"
import Header from "./components/Header"
import { apiKey, trendingShows } from "./modules/ApiLinks"


function App() {

return (
    <>

      
      <Header />
      <DisplayItems apiEndpoint="https://api.themoviedb.org/3/trending/movie/popular"
      itemHeading="Popular Movies"
      tvShowOn={true} showButtons={true} moviesOn={true}
      numberOfMovies={17}
      
      />

    </>
  )
}

export default App
