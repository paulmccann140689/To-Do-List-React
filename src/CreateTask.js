import React from 'react';
import { useState } from "react";
import {useHistory} from "react-router-dom/cjs/react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const task = {title, body};

        fetch('http://localhost:8000/Tasks', {
            method: 'POST',
            headers: { "content-Type": "application/json"},
            body: JSON.stringify(task)
        }).then(() => {
            history.push('/')
        })
    }

    return(
        <div className="createtask">
            <h2>Add a New Task</h2>
            <form onSubmit={handleSubmit}>
                <label>Task Title</label>
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}></input>

                <label>Task Description</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>

                <button>Add Task</button>
            </form>
        </div>
    );
}

export default Create;