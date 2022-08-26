import './App.css';
import logo from './react-logo.png';

function Header() {
  return (
      <header>
        <img src={logo} alt="logo"/>
        <div class="titles">
          <h3>ReactFacts</h3>
          <h4>React Course - Project 1</h4>
        </div>
      </header>
  )
}

function List() {
  return (
      <main>
          <h1>Fun facts about React</h1>
          <ul className="list">
              <li>Was first released in 2013</li>
              <li>Was originally created by Jordan Walke</li>
              <li>Has well over 100k stars on Github</li>
              <li>Is maintained by Facebook</li>
              <li>Powers Thousands of enterprise apps, including mobile apps</li>
          </ul>
      </main>
  )
}

function App() {
  return (
    <div className="App">
        <Header />
        <List />
    </div>
  );
}

export default App;