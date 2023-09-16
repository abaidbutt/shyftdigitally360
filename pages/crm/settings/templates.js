import React from "react";
import { getCRMSettingsLayout } from "../../../src/layout/CRM/Settings";
import TaskTemplate from "../../../src/components/CRM/Settings/TaskTemplate";
const Templates = () => {
  return (
    <div>
      <TaskTemplate />
    </div>
  );
};

Templates.getLayout = getCRMSettingsLayout;
export default Templates;
