import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'
function App() {
  const [count, setCount] = useState(0)
const myjson = [
  {
    question: "What type of element will be rendered from the following code?",
    image:"/images/qs.png",
    answer: "h1",
    level: "medium"
  },
  {
    question: "What is the correct command to create a new React project?",
    answer: "npx create-react-app myReactApp",
    level: "easy"
  },
  {
    question: "What does myReactApp refer to in the following command?\nnpx create-react-app myReactApp",
    answer: "The name you want to use for the new app",
    level: "easy"
  },
  {
    question: "What command is used to start the React local development server?",
    answer: "npm start",
    level: "easy"
  },
  {
    question: "What is the default local host port that a React development server uses?",
    answer: "3000",
    level: "easy"
  },
  {
    question: "To develop and run React code, Node.js is required.",
    answer: "True",
    level: "easy"
  },
  {
    question: "What is the children prop?",
    answer: "A property that lets you nest components in other components",
    level: "medium"
  },
  {
    question: "Which keyword creates a constant in JavaScript?",
    answer: "const",
    level: "easy"
  },
  {
    question: "A copy of the 'real' DOM that is kept in memory is called what?",
    answer: "Virtual DOM",
    level: "easy"
  },
  {
    question: "React component names must begin with an uppercase letter.",
    answer: "True",
    level: "easy"
  },
  {
    question: "Which operator can be used to conditionally render a React component?",
    answer: "&&",
    level: "medium"
  },
  {
    question: "When rendering a list using the JavaScript map() method, what is required for each element rendered?",
    answer: "key",
    level: "medium"
  },
  {
    question: "What tool does React use to compile JSX?",
    answer: "Babel",
    level: "easy"
  },
  {
    question: "How can you optimize performance for a function component that always renders the same way?",
    answer: "Wrap it in the React.memo higher-order component.",
    level: "difficult"
  },
  {
    question: "What props will be available to the following component?\n\n<Car {...props} />",
    answer: "all of them",
    level: "medium"
  },
  {
    question: "What is a common use case for ref?",
    answer: "To directly access a DOM node",
    level: "medium"
  },
  {
    question: "How can you combine the following arrays using the spread operator?",
    image:"/images/qs2.png",
    answer: "const combined = [...array1, ...array2];",
    level: "easy"
  },
  {
    question: "React can only render elements in the root document element.",
    answer: "False",
    level: "medium"
  },
  {
    question: "What is the correct syntax to import a Component from React?",
    answer: "import { Component } from 'react'",
    level: "easy"
  },
  {
    question: "Find the bug in this code",
    image:"/images/qs3.png",
    answer: "The first letter of the function must be capitalized",
    level: "medium"
  },
  {
    question: "React separates the user interface into components. How are components combinded to create a user interface?",
    answer: "By nesting components",
    level: "easy"
  },
  {
    question: "Although React Hooks generally replace class components, there are no plans to remove classes from React.",
    answer: "True",
    level: "medium"
  },
  {
    question: "Which of the following is NOT a rule for React Hooks?",
    answer: "Hooks can be called in Class or Function components",
    level: "difficult"
  },
  {
    question: "What is the output of the following code?",
    image:"/images/qs4.png",
    answer: "{make: 'Ford', model: 'Mustang'}",
    level: "medium"
  },
  {
    question: "Why should you avoid copying the values of props into a component's state?",
    answer: "Because that would create two instances of the same state that could become out of sync",
    level: "difficult"
  }
];

function handleNext() {
  if (count<24)
    setCount(count+1)
  else
    alert('You have reached the end of the quiz!')
}
function handleBack() {
  if (count>0)
    setCount(count-1)
  else 
    alert('You are at the start of the quiz!')
}
  return (

    <div className='main'>
      <h1>The Ultimate React Trivia!</h1>
      <h2>How well do you know React? Test your knowledge here!</h2>
      <p>Total no. of cards: {myjson.length}</p>
      <Card question={myjson[count].question} answer={myjson[count].answer} level={myjson[count].level} image={myjson[count].image}></Card>
      <div>
      <img src="/images/back.JPG" height="50px" width="50px" style={{ margin: '10px' }} onClick={handleBack} alt="Back" />
      <img src="/images/next.jpg" height="50px" width="50px" style={{ margin: '10px' }} onClick={handleNext} alt="Next" />
      </div>
    </div>
  )
}

export default App
