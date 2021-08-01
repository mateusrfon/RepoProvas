import styled from "styled-components";

export default function Navbar() {
    return (
        <NavBar>
            <button>Disciplinas</button>
            <h1>RepoProvas</h1>
            <button>Professores</button>
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
    h1 {
        font-size: 40px;
        font-weight: bold;
    }
    button {
        font-family: 'Oldenburg', cursive;
        background: none;
        color: #fff;
    }
`;