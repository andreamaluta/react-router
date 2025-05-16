// import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar'
import { Link } from 'react-router-dom';

const Actors = () => {

    const [character, setCharacter] = useState([]);

    const fetchcharacter = () => {
        axios.get("https://rickandmortyapi.com/api/character/").then((resp) => setCharacter(resp.data.results))
    }

    useEffect(() => (fetchcharacter()), []);

    return (
        <>
            <Navbar />

            <div className="container">
                <div className="row">
                    {character.map((char) => (
                        <div key={char.id} className="col-12 mb-3">
                            <Link to={`/characters/${char.id}`} className='text-decoration-none' >
                                <div className="card d-flex flex-row">
                                    <div className="card-img">
                                        <img src={char.image} alt="" />
                                    </div>
                                    <div className="card-body ">
                                        <div className="name mb-3"><h2>{char.name}</h2></div>
                                        <div className="data mb-3"><h4>{char.status}</h4></div>
                                        <div className="nation mb-3"><h4>{char.species}</h4></div>
                                        <div className="bio mb-3">{char.origin.name}</div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div >

        </>
    )
}

export default Actors
