import "./Dashboard.css";
import ProjectList from "../../components/ProjectList"
import { useCollection } from "../../hooks/useCollection"
import React, { useState } from 'react';
import ProjectFilter from "./ProjectFilter";
import { useAuthContext } from "../../hooks/useAuthContext";

function Dashboard() {
    const { documents, error } = useCollection('projects');
    const { user } = useAuthContext()
    const [filter, setFilter] = useState('all')

  const changeFilter = (newFilter) => {
    setFilter(newFilter)
  }
  
    const projects = !documents ? null : documents.filter((document) => {
        switch (filter) {
            case "all":
                return true;
            case 'mine':
                let assignedToMe = false;
                document.assignedUsersList.forEach((u) => {
                    if (user.uid === u.id) {
                        assignedToMe = true;
                    }
                });
                return assignedToMe;

            case "design":
            case "sales":
            case "development":
            case "marketing":
                console.log(document.category,filter)
                return document.category.value === filter;
            default:
                return true;
        }
    })
    return <div>
        <h2 className="page-title">Dashboard</h2>
        {error && <div className="error">{error}</div>}
        {documents && <ProjectFilter currentFilter={filter} changeFilter={changeFilter} />}
        {documents && <ProjectList projects={(projects)} />}
    </div>;
}

export default Dashboard;
