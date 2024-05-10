function Header(){

    return(
        <header>
            <h1>my website</h1>
            <nav>
                <ul>
                    {/* in the href the # makes sure that the anchor tag is not redirrecting to any where */}
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header