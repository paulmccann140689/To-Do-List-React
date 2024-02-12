import React from 'react';
import TaskList from "./TaskList";
import useFetch from "./useFetch";

const Home = () => {
    const {data: tasks, isLoading, error} = useFetch('http://localhost:8000/Tasks');

    return(
        <div className="IncompleteTasks">
            {error && <div> {error} </div>}
            {isLoading && <div>Loading...</div>}
            <TaskList tasks={tasks} title="Incomplete Tasks"></TaskList>
        </div>
    );
}

export default Home;