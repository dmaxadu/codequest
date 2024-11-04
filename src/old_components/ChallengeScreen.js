import React, { useState } from 'react';
import './ChallengeScreen.css';

const ChallengeScreen = ({ challenge, solution, onConfirm, onScoreUpdate }) => {
    const [userInput, setUserInput] = useState("");

    const handleConfirm = () => {
        if (userInput.trim() === solution.trim()) {
            onScoreUpdate(2); // Incrementa pontuação em 2 pontos
            onConfirm(true);  // Passa para o próximo conceito
        } else {
            onScoreUpdate(-1); // Deduz 1 ponto
            alert("Resposta incorreta! Tente novamente.");
        }
        setUserInput("");
    };

    return (
        <div className="challenge-screen">
            <p><strong>Desafio:</strong> {challenge}</p>
            <input 
                type="text" 
                value={userInput} 
                onChange={(e) => setUserInput(e.target.value)} 
                placeholder="Digite sua resposta aqui" 
            />
            <button onClick={handleConfirm}>Confirmar</button>
        </div>
    );
};

export default ChallengeScreen;
