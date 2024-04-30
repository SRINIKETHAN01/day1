const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div classname="container-fluid">
                    {/* <button className="button-toggler "data-bs-toggle="collapse" data-bs-target="#items" type="button" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle-navigation">
                        <span className="navbar-toggler-icon" >

                        </span>

                    </button> */}
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#items" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                        </span></button>
                    <div className="collapse navbar-collapse" id="items">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    Home

                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/counter">
                                    counter

                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/mycounter">
                                    mycounter

                                </a>
                            </li>

                        </ul>
                    </div>

                </div>

            </nav>
        </div>
    );
}
export default NavBar;