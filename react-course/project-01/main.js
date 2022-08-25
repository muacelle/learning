function Header() {
    return (
        <header>
            <img src="react-logo.png"/>
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

function Page () {
    return (
        <div>
            <Header />
            <List />
            <Foot />
        </div>
    )
}

ReactDOM
    .createRoot(document.getElementById("root"))
    .render(<Page />);