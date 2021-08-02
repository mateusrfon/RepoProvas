import styled from "styled-components";
import { Link } from "react-router-dom";

import PageBody from "./styles/PageBody";

export default function Home() {
    return (
        <PageBody>
            <Link to="/upload">Enviar prova</Link>
        </PageBody>
    );
}