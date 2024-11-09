"use client"

import React from 'react'
import { useOrganization } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { deleteProject } from "@/actions/projects";

import useFetch from "@/hooks/use-fetch";

function DeleteProject({projectId}) {
    const { membership } = useOrganization();
    const isAdmin = membership?.role === "org:admin";
    if (!isAdmin) return null;


    const router = useRouter();


    const {
        loading: isDeleting,
        error,
        fn: deleteProjectFn,
        data: deleted,
      } = useFetch(deleteProject);

      const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this project?")) {
          deleteProjectFn(projectId);
        }
      };

      useEffect(() => {
        if (deleted) {
          router.refresh();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [deleted]);
  return (
    <>
     <Button
        variant="ghost"
        size="sm"
        className={`${isDeleting ? "animate-pulse" : ""}`}
        onClick={handleDelete}
        disabled={isDeleting}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
      </>
  )
}

export default DeleteProject