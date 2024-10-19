import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])

  return (
    <>
      <h1>Chai And Fullstack</h1>
      <p>JOKES: {jokes.length}</p> 
      
      {/* // kitne jokes hai so .length se count kar lete hai kyuki jokes array hai  */}

      {/* jokes array aa gaya to kaise kaam karenge */}
      {
        // js open karte hai using {}
        // jokes ko loop kara lete hai using map, map ke andar callback lagta hai ,ab humko har ek joke ke array me ek joke milega,  joke apne aap me object hai jiske andar id, title, content hai
        // jokes.map(() => {jokes, index})
        // yaha par index value bhi le sakte hai par koi zarurat nahi kyuki har ek joke apne aap ko id de raha hai, hum ush id ko hi unique property bana denge 
        // loop kar rahe hai to key lagana zaroori hai warna optimization nahi aayegi pata nahi lagega react ko ki ek hi element pe baar baar repeat loop laga raha hai ya alag alag elements hai
        jokes.map ((joke, index) => {
          // div ko hi loop karenge pura ka pura to key lagadete hai
          // we know har joke ki ek id hai  
          <div key={joke.id}> // backend se id mil gai hai 
            {/* <h3>{}</h3>   - h3 ke andar js */}
            <h3>{joke.title}</h3>
            <p>{joke.content}</p> 
          </div>
        })

        
      }
    </>
  )
}

export default App
