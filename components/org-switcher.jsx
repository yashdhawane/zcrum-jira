"use client"

import React from 'react'
import { usePathname } from "next/navigation";
import {
    OrganizationSwitcher,
    SignedIn,
    useOrganization,
    useUser,
  } from "@clerk/nextjs";

 
  
function OrgSwitcher() {
    const { isLoaded } = useOrganization();
    const { isLoaded: isUserLoaded } = useUser();
    if (!isLoaded || !isUserLoaded) {
        return null;
      }
    const pathname = usePathname();
  return (
    
           <div className="flex justify-end mt-1">
      <SignedIn>
        <OrganizationSwitcher
          hidePersonal
          createOrganizationMode={
            pathname === "/onboarding" ? "navigation" : "modal"
          }
          afterCreateOrganizationUrl="/organization/:slug"
          afterSelectOrganizationUrl="/organization/:slug"
          createOrganizationUrl="/onboarding"
          appearance={{
            elements: {
              organizationSwitcherTrigger:
                "border border-gray-300 rounded-md px-5 py-2",
              organizationSwitcherTriggerIcon: "text-white",
            },
          }}
        />
      </SignedIn>
    </div>

  )
}

export default OrgSwitcher;