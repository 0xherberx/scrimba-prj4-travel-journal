import world_icon from "../world_icon.png"

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={world_icon} alt="world_icon"></img>
            <h3>my travel journal.</h3>
        </nav>
    )
}