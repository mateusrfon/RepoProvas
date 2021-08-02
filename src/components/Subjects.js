import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageBody from "./styles/PageBody";

export default function ExamBySubject() {
    const [subjects, setSubjects] = useState([]);
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
            setSubjects(subjects);
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
    }, []);

    return (
        <PageBody>
            {terms.map((item, index) => {
                return (
                    <>
                        <div>{index + 1} semestre:</div>
                        {item.map(item => {
                            return (
                                <Link to={`/disciplina/${item.id}`}>
                                {item.name}: {item.exams.length === 1 ? '1 prova' : `${item.exams.length} provas`}
                                </Link>
                            )
                        })}
                    </>
                )
            })}
        </PageBody>
    );
}