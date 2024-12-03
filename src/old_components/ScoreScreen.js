import React from 'react';
import Confetti from 'react-confetti';
import './ScoreScreen.css';

const ScoreScreen = ({ score, onRestart }) => {
    return (
        <div className="score-container">
            <Confetti />
            <div className="score-content">
                <h1>Parabéns!</h1>
                <p>Sua pontuação final: {score}</p>
                <button onClick={onRestart}>Recomeçar</button>
            </div>
        </div>
    );
};

export default ScoreScreen;