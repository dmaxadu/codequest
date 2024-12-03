// ConceptScreen.js
import React from 'react';

const ConceptScreen = ({ title, description }) => {
    return (
        <div className="concept-screen">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default ConceptScreen;
