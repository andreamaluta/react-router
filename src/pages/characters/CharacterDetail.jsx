import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const CharacterDetail = () => {

    const { id } = useParams();
    const [characters, setCharacters] = useState(null);

    const getCharacters = () => {
        axios.get(`https://rickandmortyapi.com/api/character/${id}`).then((res) => {
            // console.log(res.data)

            setCharacters(res.data)
            // console.log(characters)
        })
    }

    useEffect(() => {
        getCharacters();
    }, [])

    const createCard = () => {
        return <div className="card d-flex flex-row">
            <div className="card-img">
                <img src={characters.image} alt="" />
            </div>
            <div className="card-body ">
                <div className="name mb-3"><h2>{characters.name}</h2></div>
                <div className="data mb-3"><h4>{characters.status}</h4></div>
                <div className="nation mb-3"><h4>{characters.species}</h4></div>
                <div className="bio mb-3">{characters.origin.name}</div>
            </div>
        </div>
    }

    return (
        <>



            {characters == null ? <p>loading</p> : createCard()}


        </>
    )
}

export default CharacterDetail
