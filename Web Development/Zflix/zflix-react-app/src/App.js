import React, { useEffect, useState } from "react";
import Poster from "./Poster/Poster";
import { getApiCall } from "./APICall";
import classes from "./App.module.css";
import NavBarHeader from "./Nav/NavBarHeader";

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async ()=>{
      await getApiCall().then(item=> { setMovies(item)}).catch(e => console.log(e))
    })()
    // setMovies(getApiCall().then(data=> {return data}))


    

  }, []);
  console.log(movies);
  // let showPopularCarousel = movies.length > 0 &&
  //   movies[1].data.results.length > 0 && (
  //     <div>
  //       <h2 className={classes.movieHeader}>Popular</h2>
  //       <Poster inComingMovies={movies[1].data.results} />
  //     </div>
  //   );

  // let showLatestCarousel = movies.length > 0 &&
  //   movies[1].data.results.length > 0 && (
  //     <div>
  //       {console.log("LATEST")}
  //       <h2 className={classes.movieHeader}>Top Rated</h2>
  //       <Poster inComingMovies={movies[0].data.results} />
  //     </div>
  //   );
  let showUpcomingCarousel ;
   if(movies.length > 0){ showUpcomingCarousel = (
    <div>
        {console.log("UP")}
        {console.log(movies)}
        <h2 className={classes.movieHeader}>Upcoming</h2>
        <Poster inComingMovies={movies[2].data.results} />
      </div>
  )}

  return (
    <React.Fragment>
      <NavBarHeader />
      {console.log("HI")}
      {movies.length > 0 && showUpcomingCarousel}
      {/* {showPopularCarousel}
      {showLatestCarousel} */}
    </React.Fragment>
  );
}

export default App;
