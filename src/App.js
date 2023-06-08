import './App.css';
import ivan_screenshot from './ivan_screenshot.png';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={ivan_screenshot} alt="Ivan's face" height={200} width={175}/>
        </div>
        <p>Hello world!</p>
        <p>I am Ivan Chan, an aspiring software engineer.</p>
        <p>Check out these links:</p>
        <a
          className="App-link"
          href="https://ivan-s-chan.w3spaces.com/"
          target="_blank"
          rel="nooimport logo from './logo.svg';
pener noreferrer"
        >
          My CS Portfolio
        </a>
        
        <a
          className="App-link2"
          href="https://www.linkedin.com/in/ivan-s-chan/"
          target="_blank"
          rel="nooimport logo from './logo.svg';
pener noreferrer"
        >
          Linkedin
        </a>
      </header>
    </div>
  );
}

export default App;
