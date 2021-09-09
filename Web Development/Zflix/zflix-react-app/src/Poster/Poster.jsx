import classes from "./Poster.module.css";
// import Carousel from "react-multi-carousel";
import Carousel from "react-elastic-carousel";
// import "react-multi-carousel/lib/styles.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
  { width: 850, itemsToShow: 3 },
  { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
  { width: 1450, itemsToShow: 5 },
  { width: 1750, itemsToShow: 6 },
];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 15,
    slidesToSlide: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 13,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5,
    slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
    slidesToSlide: 2,
  },
};

const Poster = (props) => {
  console.log(props.inComingMovies)

  return (
    // <Carousel
    //   // className={classes.poster_image}
    //   responsive={responsive}
    //   swipeable={true}
    //   draggable={false}
    //   focusOnSelect={false}
    // >
    <div>
    <Carousel breakPoints={breakPoints}>
    {props.inComingMovies.map((movie) => {
      return (
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie.original_title}
          className={classes.image}
          key={movie.id}
        />
      );
    })}
    </Carousel>
    </div>
  );
};

export default Poster;
