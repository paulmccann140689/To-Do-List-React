import React from 'react';
import {useHistory, useParams} from "react-router-dom/cjs/react-router-dom";
import useFetch from "./useFetch";

const TaskDetails = () => {
    const {id} = useParams();
    const {data: tasks, isLoading, error} = useFetch('http://localhost:8000/Tasks/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/Tasks/' + tasks.id,{
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div className="task-details">
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {tasks && (
                <article>
                    <h2>{tasks.title}</h2>
                    <div>{tasks.body}</div>
                    <button onClick={handleClick}>Remove Task</button>
                </article>
            )}
        </div>
    );
}

export default TaskDetails;