import React from 'react';
import './pendulum.scss';

const Pendulum = ({simulation, length, weight}) => {
    const g = 9.8;
    const T = 2 * Math.PI * Math.sqrt(length / g); //При условии, что маятник в вакууме, все сводится к математическому маятнику
    //а если все сводится к математическому маятнику, то период колебания зависит только от длины маятника и силы притяжения
    const threadStyle = { //Формируем стили для подвеса
        animationPlayState: `${ simulation ? "running" : "paused"}`,
        animationDuration: `${T}s`,
        height: `${length * 34}px`,

    }
    const plummetStyle = { //Формируем стили для груза
        height: `${weight * 10}px`,
        width: `${weight * 10}px`,
        bottom: `${-weight * 10}px`,
        left: `${-weight * 5}px`,
    }
     

    return (
        <div className="pendulum-wrapper">
            <div className="pendulum__base">
                <div className="pendulum__holder"></div>
                <div 
                    className="pendulum__thread"
                    style={threadStyle}
                    >
                    <div 
                        className="pendulum__plummet"
                        style={plummetStyle}>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Pendulum;