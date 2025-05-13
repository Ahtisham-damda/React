import OnBulb from '../assets/BulbOn.png';
import OffBulb from '../assets/BulbOf.png';
import { useState } from 'react';

function SwitchBulb() {
    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => {
        setIsOn(!isOn);
    };

    return (
        <>
            <h2>Switch Bulb</h2>
            <div className="text-center">
                <img 
                className='h-25 w-25'
                    src={isOn ? OnBulb : OffBulb} 
                    alt={isOn ? "Bulb On" : "Bulb Off"} 
                    onClick={toggleSwitch} 
                    style={{ cursor: "pointer" }} 
                />
               
            </div><br />
            <div> <button onClick={toggleSwitch} >switch</button></div>
        </>
    );
}

export default SwitchBulb;