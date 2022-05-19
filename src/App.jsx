import React from 'react';
import Length from './Length.jsx'
import './App.css';

function App() {
  return (
    <main>
      <div className="input">
        <input placeholder="Max character count" />
        <input placeholder="Max line count" />
      </div>
      <textarea placeholder="Type here to see the length of your input" />
      <Length />
    </main>
  );
}

export default App;



// Instructions

// Imagine that you are a programming instructor or a computer science professor. You have maximum character counts and maximum line counts for the code that students turn in.

// Inside 'App.jsx', use a state variable to track and update the current text string inside the textarea. Pass that variable to the <Length /> component as a prop. Inside 'Length.jsx', calculate the number of characters and the number of lines in the input and update the <p> tags' contents accordingly.

// If the number of characters or the number of lines exceed the maximum, give the text "x characters" or "y lines" a font color of red.


// Running React on Repl.it

// React is a popular JavaScript library for building user interfaces.

// Vite is a blazing fast frontend build tool that includes features like Hot Module Reloading (HMR), optimized builds, and TypeScript support out of the box.

// Using the two in conjunction is one of the fastest ways to build a web app.

// Getting Started

// Hit run
// Edit App.jsx and watch it live update!
// By default, Replit runs the dev script, but you can configure it by changing the run field in the .replit file.