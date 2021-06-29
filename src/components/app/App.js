import React, {useState} from 'react';
import Pendulum from '../pendulum';
import SettingsPanel from '../settings-panel';
import './app.scss';

const App = () => {
    const [simulation, setSimulation] = useState(false); //Старт/стоп анимации
    const [length, setLength] = useState(5); //Длина нашего маятника, в метрах
    const [weight, setWeight] = useState(5); //Вес нашего маятника, в килограммах 

    return (
        <div className="app">
            <header className="app__header">
                <p>Pendulum simulator application</p>
            </header>
            <Pendulum 
                simulation={simulation}
                length={length}
                weight={weight}
                />
            <SettingsPanel 
                onToggleSimulation={setSimulation}
                simulation={simulation} 
                length={length}
                onChangeLength={setLength}
                weight={weight}
                onChangeWeight={setWeight}
                />
        </div>
    );
}
export default App;
