import React, { useState } from 'react';   
import PropTypes from 'prop-types'

const CouterApp = ({value = 10}) => {

    const [counter, setCounter] = useState(value);  

   const handleApp = () => {
        setCounter(counter + 1);
   }

    const handleLessApp = () => {
    setCounter(counter - 1);
    }

    const handleResetApp = () => {
    setCounter(value);
    }

    return ( 
    <div>
        <h1>CounterApp</h1>
        {/* <pre>{JSON.stringify(texto, null, 3)}</pre> */}
        <h2>{counter}</h2>
        <button onClick={handleApp}>+1</button>
        <button onClick={handleResetApp}>Reset</button>
        <button onClick={handleLessApp}>-1</button>

    </div>
   );
}

CouterApp.propTypes = {
    value: PropTypes.number
}

// CouterApp.defaultProps = {
//     value: 'valor por defecto'
// }
export default CouterApp;