import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { getProjects } from "@/actions/projects"
import DeleteProject from "./delete-project";

export default async function ProjectList({ orgId }) {
    const projects = await getProjects(orgId);
  
    if (projects.length === 0) {
      return (
        <p>
          No projects found.{" "}
          <Link
            className="underline underline-offset-2 text-blue-200"
            href="/projects/create"
          >
            Create New.
          </Link>
        </p>
      );
    }
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                {project.name}
                <DeleteProject projectId={project.id} />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 mb-4">{project.description}</p>
              <Link
                href={`/projects/${project.id}`}
                className="text-blue-500 hover:underline"
              >
                View Project
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }