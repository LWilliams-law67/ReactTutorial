import React from "react";
import {useEffect, useState} from 'react';
import SearchIcon from '../Resources/Search.svg';

const Main = () => {
    const MTG = require('mtgsdk');
    // const [cards, setCards] = useState([]);

    // const searchCards = async (cardText) => {
    //     const response = await MTG.card.find(cardText);

    //     setCards(response);
    // }

    // useEffect(() =>{
    //     setCards('')
    // }, []);

    return (
        <main>
            <div className="search">
                <input
                    placeholder="Search for MTG cards..."
                    value="giant"
                    // onChange={(e) => { setSearchTerm(e.target.value); }}
                />
                <img
                    src={SearchIcon}
                    alt="Search"
                    //onClick={(e) => { searchCards(searchTerm)}}
                />
            </div>
        </main>
    )
}

export default Main;