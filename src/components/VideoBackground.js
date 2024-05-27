import React from 'react';
import useMovieById from '../hooks/useMovieById';
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId, bool }) => {
    const trailerMovie = useSelector(store => store.movie.trailerMovie);

    useMovieById(movieId);

    return (
        <div className='w-[vw] overflow-hidden'>
            <iframe
                className={`${bool ? "w-[100%]" : "w-screen aspect-video"}`}
                src={`https://www.youtube.com/embed/${trailerMovie?.key}?si=HorxQfzFY2_TAO1W&autoplay=1&mute=1&controls=0&showinfo=0&rel=0`}
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen>
            </iframe>
        </div>
    );
};

export default VideoBackground;
