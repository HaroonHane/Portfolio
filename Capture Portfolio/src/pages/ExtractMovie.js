import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MovieState } from "./movieState";
import { Details ,Headline ,Awards ,AwardDetails ,IMG } from "./style";
import { AwardListAnim, pageAnimationMovieDetails } from "../components/PageAnimations";


const MovieDetails = () => {
  const location = useLocation();
  const movies = MovieState();
  const [currentMovie, setCurrentMovie] = useState(null);

useEffect(()=>{
 
    const selectedMovie = movies.filter(
      (stateMovie) => stateMovie.url === location.pathname
    );
    setCurrentMovie(selectedMovie[0]);
    window.scrollTo(0, 0)
},[location.pathname ])

  return (
    <>
      {currentMovie && (
        <Details variants={pageAnimationMovieDetails} initial="hidden" animate="show"  exit="exit">
          <Headline>
            <h2>{currentMovie.title}</h2>
            <img src={currentMovie.mainImg} alt="main" />
          </Headline>
          <h2>Awards</h2>
          <Awards>
            {currentMovie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>
          <IMG>
          <img src={currentMovie.secondaryImg} alt="main" />
          </IMG>

        </Details>
      )}
    </>
  );
};

const Award = ({ title, description }) => {
  return (
    <>
     <AwardDetails variants={AwardListAnim}
     initial="hidden"
     animate="show"
     >
     <h4>{title}</h4>
     <div className="line"></div>
      <p>{description}</p>
     </AwardDetails>
    </>
  );
};


export default MovieDetails;
