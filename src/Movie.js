import React from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'
import './Movie.css';

// Dumb Components

function Movie({title, poster, genres, synopsis}) {
    return (
        // HTML 영역
        <div className="Movie"> 
            <div className="Movie__Columns">
                <MoviePoster poster={poster} alt={title}/>
            </div>
            <div className="Movie__Columns">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <div className="Movie__Synopsis">
                <LinesEllipsis
                    text={synopsis}
                    maxLine='3'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                    />   
                </div>
            </div>
        </div>
    )
}

function MoviePoster({poster, alt}) {
    return (
        <img src={poster} alt={alt} title={alt} className="Movie__Poster" />
    )
}

function MovieGenre({genre}) {
    return (
        <span className="Movie__Genre">{genre} </span>
    )
}

// To run typechecking on the props for a component
Movie.PropTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired, 
    alt: PropTypes.string.isRequired
}

MoviePoster.PropTypes = {
    poster: PropTypes.string.isRequired, 
    alt: PropTypes.string.isRequired
}

MovieGenre.PropTypes = {
    genre: PropTypes.string.isRequired
}

export default Movie;


// class Movie extends Component { 

//     static PropTypes = {
//         title: PropTypes.string.isRequired,
//         poster: PropTypes.string.isRequired
//     }

//     render() {
//         return (
//             <div>
//                 <MoviePoster poster={this.props.poster}/>
//                 <h1>{this.props.title}</h1>
//             </div>
//         )
        
//     }
// }

// class MoviePoster extends Component {

//     static PropTypes = {
//         poster: PropTypes.string.isRequired
//     }

//     render() {
//         return (
//             <img src={this.props.poster} alt="" />
//         )
//     }
// }

