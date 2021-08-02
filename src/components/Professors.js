import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageBody from "./styles/PageBody";

export default function ExamBySubject() {
    const [professors, setProfessors] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_HOST}/professors`)
        .then((req, res) => {
            const professors = req.data;
            setProfessors(professors);
        })
        .catch(() => {
            alert('Não foi possível coletar as informações.')
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <PageBody>
            {professors.map(professor => {
                return (
                    <Link key={`professor${professor.id}`} to={`/professor/${professor.id}`}>
                        {professor.name}: {professor.exams.length === 1 ? '1 prova' : `${professor.exams.length} provas`}
                    </Link>
                )
            })}
        </PageBody>
    );
}