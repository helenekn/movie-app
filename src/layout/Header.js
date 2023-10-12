function Header() {
    return (
        <nav className="indigo darken-4">
            <div className="nav-wrapper container">
                <a href="#" className="brand-logo">Movies App</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Me</a></li>
                </ul>
            </div>
        </nav>
    )
}

export { Header };