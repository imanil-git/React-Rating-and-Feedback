import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { FaStar } from "react-icons/fa";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

function App() {
  const stars = Array(5).fill(0);
  // const [count, setCount] = useState(0)

  const[currentValue, setCurrentValue] = useState(0)
  const[hoverValue, setHoverValue] = useState(undefined);

  const handleClick = value => {
    setCurrentValue(value)
  };

  const  handleMouseOver = value => {
    setHoverValue(value);
  };

  const handleMouseLeave = () =>{
    setHoverValue(undefined)
  }

  return (
    <>
      <div style={styles.container}>
        <h2>Star Ratings in Rate</h2>
        <div style={styles.stars}>
          {stars.map((_, index) => {
            return <FaStar 
            key={index}
            size={24}
            style={{
              marginRight: 10,
              cursor: "pointer" 
            }}
            color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
            onClick={() => handleClick(index + 1)}
            onMouseOver={() => handleMouseOver(index + 1)}
            onMouseLeave={handleMouseLeave}
            />;
          })}
        </div>
        <textarea 
          placeholder="What's your feedback"
          style={styles.textarea}
        />
        <button style={styles.button}>Submit</button>
      </div>
    </>

    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    margin: "20px 0",
    minHeight: 100,
    padding: 10
  },
  button:{
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10
  }
};

export default App;
