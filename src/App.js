import React, { useEffect, useState } from 'react';
import './App.css';
import { concepts } from './concepts';

const App = () => {
    var lastChallenges = []
    const [currentChallenge, setCurrentChallenge] = useState({})
    const [streak, setStreak] = useState(0)
    const [alternatives, setAlternatives] = useState([])
    const [consecutiveErros, setConsecutiveErros] = useState(0)
    const [showExplanation, setShowExplanation] = useState(false)
    const [hintCount, setHintCount] = useState(3)
    const [error, setError] = useState(false)
    const [hideHint, setHideHint] = useState(false)
    const [message, setMessage] = useState('')
    const [correctCount, setCorrectCount] = useState(0)

    useEffect(() => {
        const lastStreak = window.localStorage.getItem('streak')
        if(lastStreak === null){
            console.log("Bem-vindo ao jogo!")
            setStreak(0)
        }
        else {
            setStreak(Number(lastStreak))
        }
    }, [])

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
        setHideHint(false)
        setMessage(concepts.challenges[index].explain)
    }, [streak, consecutiveErros])

    const checkAnswer = (alternative) => {
        if(alternative === currentChallenge.id){
            setStreak(streak + 1)
            setConsecutiveErros(0)
            window.localStorage.setItem('streak', streak + 1)
            setCorrectCount(hintCount === 3 ? 0 : correctCount + 1)
            if((correctCount + 1) >= 3 && hintCount < 3) {
                setHintCount(hintCount + 1)
                setCorrectCount(0)
            }
        }
        else {
            setError(true)
            setShowExplanation(true)
            setMessage(concepts.challenges[alternative].explain)
        }
    }

    const closeExplanation = () => {
        if(error){
            window.localStorage.setItem('streak', streak)
            if(streak === 0){
                setConsecutiveErros(consecutiveErros + 1)
            } else {
                setStreak(0)
                window.localStorage.setItem('streak', 0)    
            }
        }
        setShowExplanation(false)
    }

    function shuffle(array) {
        let currentIndex = array.length;
        while (currentIndex !== 0) {
          let randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
      }

    const openHint = () => {
        setHintCount(hintCount - 1)
        setShowExplanation(true)
        setError(false)
        setHideHint(true)
    }
      

    return (
        <div className="app-container">
            <h1 className='title'>codeQuest</h1>
            <div className='head'>
                <h2>{currentChallenge.pergunta}</h2>
                { hintCount > 0 && !hideHint && (
                    <div className='hint' onClick={ () => openHint() }> {hintCount} 💡 </div>
                )}
            </div>
            <div className="alternative-wrapper">
                {
                    alternatives.map(alternative => (
                        <div className="alternative-div" onClick={() => checkAnswer(alternative)}>{concepts.challenges[alternative].resposta}</div>
                    ))
                }
            </div>
            { showExplanation && (
               <div className='background' onClick={ () => closeExplanation()}/>
            ) }
            { showExplanation && (
                <div style={{backgroundColor: `${error ? '#bf0a30' : 'none'}` }}className="explanation-wrapper">
                    <h2 style={{ color: `${error ? '#eaeaea' :'black'}` }}>{ message }</h2>
                </div>
            ) }
            <h3 className='streak'>🔥 {streak}</h3>
        </div>
    );
};

export default App;
