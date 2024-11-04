import React, { useEffect, useState } from 'react';
import './App.css';
import { concepts } from './concepts';

const App = () => {
    var lastChallenges = []
    const [currentChallenge, setCurrentChallenge] = useState({})
    const [streak, setStreak] = useState(0)
    const [alternatives, setAlternatives] = useState([])
    const [consecutiveErros, setConsecutiveErros] = useState(0)

    useEffect(() => {
        var index = -1;
        while(index < 0 || lastChallenges.indexOf(index) !== -1){
            index = Math.floor(Math.random() * concepts.challenges.length)
        }

        setCurrentChallenge(concepts.challenges[index])

        var currentAlternatives = []
        currentAlternatives.push(index)
        for(let i = 0; i < 3; i++){
            var alternativeIndex = -1;
            while(alternativeIndex < 0 || currentAlternatives.indexOf(alternativeIndex) !== -1){
                alternativeIndex = Math.floor(Math.random() * concepts.challenges.length)
            }
            currentAlternatives.push(alternativeIndex)   
        }
        shuffle(currentAlternatives)
        setAlternatives(currentAlternatives)
    }, [streak, consecutiveErros])

    const checkAnswer = (alternative) => {
        if(alternative === currentChallenge.id){
            console.log("Resposta correta para a questão ", currentChallenge.id)
            setStreak(streak + 1)
            setConsecutiveErros(0)
        }
        else {
            if(streak === 0){
                setConsecutiveErros(consecutiveErros + 1)
            } else {
                setStreak(0)
            }
        }
    }

    function shuffle(array) {
        let currentIndex = array.length;
        while (currentIndex !== 0) {
          let randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
      }
      

    return (
        <div className="app-container">
            <h1 className='title'>codeQuest</h1>
            <h2>{currentChallenge.pergunta}</h2>
            <div className="alternative-wrapper">
                {
                    alternatives.map(alternative => (
                        <div className="alternative-div" onClick={() => checkAnswer(alternative)}>{concepts.challenges[alternative].resposta}</div>
                    ))
                }
            </div>
            <h3 className='streak'>🔥 {streak}</h3>
        </div>
    );
};

export default App;
