import React from 'react';
import './settings-panel.scss';

const SettingsPanel = ({onToggleSimulation, simulation, onChangeLength, length, onChangeWeight, weight}) => {
    return (
        <div className="settings-panel">
            <ul className="settings-panel__wrapper">
                <li>
                    <label htmlFor="threadLength">
                        Thread length, m: {length}
                    </label>
                    <input 
                        name="threadLength" 
                        type="range" 
                        min="1" 
                        max="10"
                        value={length}
                        step="0.5"
                        onChange={(e) => onChangeLength(e.target.value)}>
                    </input>
                </li>
                <li>
                    <label htmlFor="pendulumWeight">
                        Pendulum weight, kg: {weight}
                    </label>
                    <input 
                        name="pendulumWeight" 
                        type="range" 
                        min="1" 
                        max="10"
                        value={weight}
                        step="0.5"
                        onChange={(e) => onChangeWeight(e.target.value)}>
                    </input>
                </li>
                <li>
                    <button     
                        className="settings-panel__toggle-simulation"
                        onClick={() => onToggleSimulation((value) => !value)}>
                        {simulation ? 'Stop simulation' : 'Start simulation'}
                    </button>
                </li>
            </ul>
        </div>
    );
}
export default SettingsPanel;