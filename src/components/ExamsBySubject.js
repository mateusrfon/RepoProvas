import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageBody from "./styles/PageBody";
import styled from "styled-components";

export default function ExamsBySubject(props) {
    const { id } = useParams();
    const [categories, setCategories] = useState([]);
    const [subject, setSubject] = useState();
    const [examsByCategory, setExamsByCategory] = useState({});
    
    useEffect(() => {
        async function fetchData() {
            const categories = await axios.get(`${process.env.REACT_APP_HOST}/categories`);
            setCategories(categories.data);

            const subject = await axios.get(`${process.env.REACT_APP_HOST}/subject/${id}`);
            setSubject(subject.data);

            const exams = subject.data.exams;
            
            populateExamsByCategory(exams, categories.data);
        }
        fetchData();
    }, [id]);

    function populateExamsByCategory(exams, categories) {
        const obj = {};
        for (let i = 0; i < categories.length; i++) {
            obj[categories[i].name] = [];
        }
        for (let i = 0; i < exams?.length; i++) {
            const exam = exams[i];
            const category = exam.category.name;
            obj[category]?.push(exam);
        }
        setExamsByCategory(obj);
    }
    
    return (
        <PageBody>
            <h1>{subject?.name}:</h1>
            {categories.map(category => {
                return (
                    <div key={`category${category.id}`}>
                        <Category>{category.name}:</Category>
                        {examsByCategory[category.name]?.length > 0 
                        ? examsByCategory[category.name].map(exam => { 
                            return <a key={`exam${exam.id}`} href={exam.link}>{exam.name} - {exam.professor.name}</a> 
                        })
                        : 'Sem provas registradas'
                        }
                    </div>
                )
            })}
        </PageBody>
    );
}

const Category = styled.div`
    margin-top: 20px;
`;