import { Link } from "react-router-dom";
import styled from "styled-components";

import PageBody from "./styles/PageBody";

export default function Home() {
    return (
        <PageBody>
            <Btn>
                <Link to="/upload">Contribuir com<br/>uma nova prova</Link>
            </Btn>
        </PageBody>
    );
}

const Btn = styled.div`
    width: 200px;
    height: 50px;
    background-color: #fff;
    color: #808080;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 10px;
    margin-top: 20px;
    font-family: 'Oldenburg', cursive;
    box-shadow: 0 0 5px black;
`;