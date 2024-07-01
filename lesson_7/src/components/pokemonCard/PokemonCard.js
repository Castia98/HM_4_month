import React, { useEffect, useState } from 'react';
import classes from './pokemonCard.module.scss';
import axios from "axios";

const PokemonCard = ({ pokemon, handleShow }) => {
    const [pokemonItem, setPokemonItem] = useState({})
    const [loading, setLoading] = useState(false)

    console.log(pokemonItem, 'pokemonka');

    const getPokemon = async () => {
        setLoading(true)
        try {
            const response = await axios(pokemon.url);
            return response.data;
        } catch (e) {
            console.log(e.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getPokemon().then(pokemonOne => setPokemonItem(pokemonOne));
    }, [pokemon.url]);

    return (
        <li className={classes.pokemonItem}>
            {
                loading ? 'loading' : <>
                    <div className={classes.imgBox}>
                        <img src={pokemonItem?.sprites?.other?.dream_world?.front_default} alt={pokemonItem.name} />
                        <p>{pokemon.name}</p>
                    </div>
                    <button className={classes.button} onClick={handleShow}>подробнее</button>
                </>
            }
        </li>
    );
};

export default PokemonCard;