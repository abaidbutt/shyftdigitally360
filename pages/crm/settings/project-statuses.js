import React from "react";

import { getCRMSettingsLayout } from "../../../src/layout/CRM/Settings";
import ProjectStatus from "../../../src/components/CRM/Settings/ProjectStatus";
const ProjectStatuses = () => {
  return (
    <div>
      <ProjectStatus />
    </div>
  );
};

ProjectStatuses.getLayout = getCRMSettingsLayout;
export default ProjectStatuses;
