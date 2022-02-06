import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from './Avatar';
import "./ProjectList.css"
export default function ProjectList({ projects }) {
    return (
    <div className="project-list">
        {projects.length === 0 && <p>No projects atm</p>}

        {projects.map(project => 
            <Link  key={project.id}  to={`/projects/${project.id}`}>
                <h4>{project.name}</h4>
            <p>Due by {project.dueDate.toDate().toDateString()}</p>
            <div className="assigned-to">
                <ul>
                    {project.assignedUsersList.map((user) => (
                        <li key={user.photoURL}>
                            <Avatar src={user.photoURL} />
                            <p>{user.displayName}</p>
                        </li>
                    ))}
                </ul>
            </div>
            </Link>)}
    </div>);
}
