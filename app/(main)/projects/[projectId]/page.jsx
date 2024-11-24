
import React from 'react'
import { getProject } from "@/actions/projects";
import { notFound } from "next/navigation";
import SprintBoard from "../_components/sprint-board";

import SprintCreationForm from "../_components/create-sprint";

async function ProjectPage({params}) {
    const { projectId } = params;
    const project = await getProject(projectId);
    if (!project) {
        notFound();
      }
   
      
  return (
    <div className='container mx-auto'>

    <div>project created</div>
    <SprintCreationForm
        projectTitle={project.name}
        projectId={projectId}
        projectKey={project.key}
        sprintKey={project.sprints?.length + 1}
        
        />

        
      {project.sprints.length > 0 ? (
        <SprintBoard
          sprints={project.sprints}
          projectId={projectId}
          orgId={project.organizationId}
        />
      ) : (
        <div>Create a Sprint from button above</div>
      )}
    </div>
  )
}

export default ProjectPage