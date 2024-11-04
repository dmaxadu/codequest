import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';
import ConceptScreen from './ConceptScreen';
import ChallengeScreen from './ChallengeScreen';
import ScoreScreen from './ScoreScreen';
import './App.css';

const getRandomConcepts = (conceptList, count) => {
    const shuffled = [...conceptList].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
};

const App = () => {

    const concepts = [];
    
    const [selectedConcepts, setSelectedConcepts] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const randomConcepts = getRandomConcepts(concepts, 10);
        setSelectedConcepts(randomConcepts);
    }, []);

    const totalConcepts = selectedConcepts.length;

    const updateProgress = () => {
        const newProgress = ((currentIndex + 1) / totalConcepts) * 100;
        setProgress(newProgress);
    };

    const handleConfirm = (isCorrect) => {
        if (isCorrect) {
            handleScoreUpdate(2);
        } else {
            handleScoreUpdate(-1);
        }

        // Mover para o próximo conceito ou ir para a tela de pontuação
        if (currentIndex < totalConcepts - 1) {
            setCurrentIndex(currentIndex + 1);
            updateProgress();
        } else {
            // Se for o último conceito, vá para a tela de pontuação
            setCurrentIndex(totalConcepts); // Atualiza para forçar a exibição da tela de pontuação
        }
    };

    const handleScoreUpdate = (points) => {
        setScore(score + points);
    };

    const handleRestart = () => {
        const randomConcepts = getRandomConcepts(concepts, 10);
        setSelectedConcepts(randomConcepts);
        setCurrentIndex(0);
        setScore(0);
        setProgress(0);
    };

    // Verifica se chegou ao final dos conceitos
    if (currentIndex >= totalConcepts) {
        return <ScoreScreen score={score} onRestart={handleRestart} />;
    }

    return (
        <div className="app-container">
            <h1>CodeQuest</h1>
            <ProgressBar progress={progress} />
            {selectedConcepts.length > 0 && (
                <>
                    <ConceptScreen 
                        title={selectedConcepts[currentIndex].title} 
                        description={selectedConcepts[currentIndex].description} 
                    />
                    <ChallengeScreen 
                        challenge={selectedConcepts[currentIndex].challenge} 
                        solution={selectedConcepts[currentIndex].solution} 
                        onConfirm={handleConfirm} 
                        onScoreUpdate={handleScoreUpdate} 
                    />
                </>
            )}
            <p>Pontuação: {score}</p>
        </div>
    );
};

export default App;
