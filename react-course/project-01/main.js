const navbar = (
    <nav>
        <img src="react-logo.png"/>
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers Thousands of enterprise apps, including mobile apps</li>
        </ul>
    </nav>
)

ReactDOM
    .createRoot(document.getElementById("root"))
    .render(navbar);