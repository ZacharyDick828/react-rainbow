import React, { useState } from 'react'
import ColorBlock from './ColorBlock.js' 
import ColorForm from './ColorForm.js'

function App(){
  
    let [colors, setColors] = useState([
      'violet',
      'blue', 
      'lightblue', 
      'green', 
      'greenyellow', 
      'yellow', 
      'orange', 
      'red'
    ])
    const addColor = (newColor) => {
      setColors([colorMap, newColor])
    }
    let colorMap = colors.map((color, i) => {
      return (
        <ColorBlock key={i} color={color} />
      )
    })
    return (
        <div className="App">
            {colorMap}
            <ColorForm addColor={addColor}/>
        </div>
    )
}
export default App