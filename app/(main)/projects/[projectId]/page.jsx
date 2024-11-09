import React from 'react'
import { getProject } from "@/actions/projects";
import { notFound } from "next/navigation";

async function ProjectPage({params}) {
    const { projectId } = params;
    const project = await getProject(projectId);
    if (!project) {
        notFound();
      }

      
  return (
    <div>project created</div>
  )
}

export default ProjectPage