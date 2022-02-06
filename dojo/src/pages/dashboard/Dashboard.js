import "./Dashboard.css";
import ProjectList from "../../components/ProjectList"
import {useCollection} from "../../hooks/useCollection"
import React from 'react';

function Dashboard() {
  const {documents,error} = useCollection('projects');
  return <div>
    <h2 className="page-title">Dashboard</h2>
    {error && <div className="error">{error}</div>}
    {documents && <ProjectList projects={(documents)}/>}
  </div>;
}

export default Dashboard;
