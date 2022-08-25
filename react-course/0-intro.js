
function MainContent() {
    return (
        <h1>I'm learning React!</h1>
    )
}

// ReactDOM.render(<MainContent/>, document.getElementById("root"))

const element = (
    <div>
        <h1 className="header">This is JSX</h1>
        <p>This is a paragraph</p>
    </div>
)

// ReactDOM.render(element, document.getElementById("root"))

const navbar = (
    <nav>
        <h1>My Website</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM
    .createRoot(document.getElementById("root"))
    .render(navbar);

// or

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(navbar);