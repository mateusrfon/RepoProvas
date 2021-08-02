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
                    <>
                        <Semester>{index + 1} semestre:</Semester>
                        {term.map(subject => {
                            return (
                                <Link to={`/disciplina/${subject.id}`}>
                                {subject.name}: {subject.exams.length === 1 ? '1 prova' : `${subject.exams.length} provas`}
                                </Link>
                            )
                        })}
                    </>
                )
            })}
        </PageBody>
    );
}

const Semester = styled.div`
    margin-top: 20px;
`