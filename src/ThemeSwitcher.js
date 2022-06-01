import React, { useState, useContext } from 'react';


const ThemeSwitcher = () => {
    const colors = [
        {
            name: 'black',
            label: 'Black',
            color: '#000'
        },
        {
            name: 'green',
            label: 'Green',
            color: '#00FF00'
        },
        {
            name: 'blue',
            label: 'Blue',
            color: '#0000FF'
        }
    ];
    const [currentColor, setCurrentColor] = useState('');

    const setColor = (color) => {
        setCurrentColor(color);
    }

    return(
        <>  
        <div style={{'background': currentColor, 'min-height': '200px'}}>
            <h2>Theme Switcher</h2>
            {colors && colors.map((temp, index) => (
                <button key={temp.name + index} className={`bg-${temp.name}`} style={{'background': temp.color, 'padding': '10px', 'color': 'white'}} onClick={() => setColor(temp.color)}>{temp.label}</button>
            ))}
           
            </div>
        </>
    )
}

export default ThemeSwitcher;