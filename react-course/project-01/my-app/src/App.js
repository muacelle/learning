import './App.css';

function Header() {
  return (
      <header>
          <img src="./react-logo.png" alt="logo"/>
          <ul className="navbar">
              <li>Pricing</li>
              <li>About</li>
              <li>Contact</li>
          </ul>
      </header>
  )
}

function List() {
  return (
      <div className="main">
          <h1>Reasons I'm excited to learn React</h1>
          <ul className="list">
              <li>Was first released in 2013</li>
              <li>Was originally created by Jordan Walke</li>
              <li>Has well over 100k stars on Github</li>
              <li>Is maintained by Facebook</li>
              <li>Powers Thousands of enterprise apps, including mobile apps</li>
          </ul>
      </div>
  )
}

function Foot() {
  return (
      <p className="foot">2021 Ziroll development. All rights reserved.</p>
  )
}

function App() {
  return (
    <div className="App">
        <Header />
        <List />
        <Foot />
    </div>
  );
}

export default App;
