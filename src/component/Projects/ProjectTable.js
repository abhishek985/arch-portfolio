// ProjectTable.js
import React from 'react';
import './ProjectTable.css';
import { projectData } from './data';

const ProjectTable = () => {
  return (
    <div className="project-table-container">
      <table className="project-table">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Particulars of Project</th>
            <th>Client</th>
            <th>Status of Project</th>
            <th>Details of Work Order</th>
          </tr>
        </thead>
        <tbody>
          {projectData.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.particulars}</td>
              <td>{item.client}</td>
              <td>{item.status}</td>
              <td>{item.workOrder}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;
