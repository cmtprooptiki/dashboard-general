import "./navbar.scss"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src="logo.svg" alt=""/>
                <span>lamadmin</span>
            </div>
            <div className="icons">
                <img src="/search.svg" alt="" className="icon"/>
                <img src="/app.svg" alt="" className="icon"/>
                <img src="/expand.svg" alt="" className="icon"/>
                <div className="notification">
                    <img src="/notifications.svg" alt=""/>
                    <span>1</span>
                </div>
                <div className="user">
                    <img src="https://media.licdn.com/dms/image/C4E03AQEzwpryiISn8Q/profile-displayphoto-shrink_800_800/0/1617695699068?e=1715212800&v=beta&t=ZRnOAvwz54OOaF1pT4SuD0o5M2ebDNn-MIphY5-9UR8" alt=""/>
                    <span>Jane</span>
                </div>

                <img src="/settings.svg" alt="" className="icon"/>
            </div>
        </div>
    )
}


export default Navbar