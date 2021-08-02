import styled from "styled-components";
import axios from "axios";

import PageBody from "./styles/PageBody";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export default function UploadExam() {
    const history = useHistory();
    const [subjects, setSubjects] = useState([]);
    const [categories, setCategories] = useState([]);
    const [professors, setProfessors] = useState([]);

    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [categoryId, setCategoryId] = useState();
    const [subjectId, setSubjectId] = useState();
    const [professorId, setProfessorId] = useState();

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_HOST}/subjects`)
        .then((req, res) => {
            const subjects = req.data;
            setSubjects(subjects);
        });
        axios.get(`${process.env.REACT_APP_HOST}/categories`)
        .then((req, res) => {
            setCategories(req.data);
        })
        .catch(() => {
            alert('Não foi possível coletar as informações.')
        });
    }, []);

    function sendExam(e) {
        e.preventDefault();
        if (categoryId === -1 || professorId === -1 || subjectId === -1) return alert('Selecione as opções.')
        const body = {
            name,
            link,
            category: { id: categoryId },
            professor: { id: professorId },
            subject: {id: subjectId }
        }
        axios.post(`${process.env.REACT_APP_HOST}/exam`, body)
        .then(() => {
            alert('Prova enviada com sucesso!');
            history.push("/");
        })
        .catch(() => {
            alert('Algo deu errado.');
        });
    }

    function listProfessors(id) {
        const subject = subjects.find(item => item.id === id);
        setProfessors(subject.professors);
    }

    return (
        <PageBody>
            <Form onSubmit={sendExam}>
                <Input required placeholder='nome ex."2020.1"' value={name} onChange={e => setName(e.target.value)}/>
                <Input placeholder="link" value={link} onChange={e => setLink(e.target.value)}/>
                <Select value={categoryId} onChange={e => setCategoryId(e.target.value)}>
                    <option disabled selected value>Categoria:</option>
                    {categories.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
                </Select>
                <Select value={subjectId} onChange={e => { 
                        const id = parseInt(e.target.value);
                        setSubjectId(id);
                        listProfessors(id);
                    }}>
                    <option disabled selected value>Disciplina:</option>
                    {subjects.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
                </Select>
                <Select value={professorId} onChange={e => setProfessorId(e.target.value)}>
                    <option disabled selected value>Professor:</option>
                    {professors.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
                </Select>
                <button>Submit</button>
            </Form>
        </PageBody>
    );
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    border: 1px solid black;
    border-radius: 5px;
    height: 30px;
    width: 250px;
    margin-bottom: 10px;
    font-size: 15px;
    padding: 0 5px;
`;

const Select = styled.select`
    border: 1px solid black;
    border-radius: 5px;
    height: 30px;
    width: 250px;
    margin-bottom: 10px;
    background: none;
    font-size: 15px;
`;