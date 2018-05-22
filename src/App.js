import React, {Component} from 'react';
import './App.css';
import Movie from './Movie';

const
    movies = [
    {
        id: 1,
        title: "Matrix",
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqaGMaaUVGsGmcn_6Msg67atU8e5N2QelqEvOzDCLIGxKLUvUJPg"
    },
    {
        id: 2,
        title: "Full",
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY5FyD4rg0lSfDLSE9HThwGzqquOly0np5hsv18vXp0x2jFUH1PQ"
    },
    {
        id: 3,
        title: "HaIelangu",
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlZ_hx6nODrSlWJrcLMKzrZeqE1LcTzDIhZoR1zkjCmThTrCBT2A"
    },
    {
        id: 4,
        title: "Go",
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZQoa_uA00IbaujINCnXPrqKsdYGml7lE1nUdANIPa3UsRETTMLQ"
    },
    {
        id: 5,
        title: "Java",
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM6nauTN0_5jOzoX735qUYF5gS5mAG6TIdycL2iRLBvHrtamD9mA"
    },


]

class App extends Component {
    render() {
        return (
            <div className="App">
                {movies.map((movie, index) => {
                    return <Movie title={movie.title} poster={movie.poster} key={index}/>
                })}
            </div>
        );
    }
}

export default App;
