import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PageBody from "./styles/PageBody";

export default function ExamBySubject() {
    const [terms, setTerms] = useState([
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_HOST}/subjects`)
        .then((req, res) => {
            const subjects = req.data;
            const populateTerms = [...terms];
            for (let i = 0; i < subjects.length; i++) {
                const selected = parseInt(subjects[i].term.name) - 1;
                populateTerms[selected].push(subjects[i]);
            }
            setTerms(populateTerms);
        })
        .catch(() => {
            alert('Não foi possível coletar as informações.')
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <PageBody>
            {terms.map((term, index) => {
                return (
                    <Semester key={`term${index}`}>
                        <h1>{index + 1} semestre:</h1>
                        {term.map(subject => {
                            return (
                                <Link key={`subject${subject.id}`} to={`/disciplina/${subject.id}`}>
                                    {subject.name}: {subject.exams.length === 1 ? '1 prova' : `${subject.exams.length} provas`}
                                </Link>
                            )
                        })}
                    </Semester>
                )
            })}
        </PageBody>
    );
}

const Semester = styled.div`
    width: 250px;
    display: flex;
    flex-direction: column;
    h1 {
        font-size: 20px;
        margin-top: 20px;
    }
    a {
        margin-left: 10px;
    }
`