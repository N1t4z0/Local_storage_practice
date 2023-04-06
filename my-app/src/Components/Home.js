import React, { useState } from 'react'
import "./Styles.css"
import { Profile } from './Profile';

export const Home = () => {

    const [inputText, setInputText]  = useState(''); 
    const [savedData, setSaveData] =useState(false)

    const handlerInputChange = (e) =>{ 
        const text = e.target.value
        setInputText(text);
        console.log(inputText);
    }

const saveData = () => {localStorage.setItem('nombre', inputText); alert("Has guardado tu nombre"); setSaveData(true);}

    return (
        <div className='Container'>
            <input
            className='input'
            placeholder='Ingresa tu nombre'
            onChange={handlerInputChange}
            />
            <button className='button' onClick={saveData} >
                Guardar
            </button>


            {(!!savedData) && <Profile/>}
        </div>
    )
}
