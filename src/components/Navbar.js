import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <NavBar>
            <Link to="/disciplinas" className="btn">Disciplinas</Link>
            <Link to="/" className="logo">RepoProvas</Link>
            <Link to="/professores" className="btn">Professores</Link>
        </NavBar>
    )
}

const NavBar = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 0 40px;
    align-items: center;
    background-color: gray;
    box-shadow: 0 0 8px rgba(0,0,0,0.15);
    color: #fff;
    .logo {
        font-size: 40px;
        font-weight: bold;
    }
    .btn {
        font-family: 'Oldenburg', cursive;
        background: none;
        color: #fff;
    }
`;