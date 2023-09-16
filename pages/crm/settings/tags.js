import React from "react";
import Tag from "../../../src/components/CRM/Settings/Tag";
import { getCRMSettingsLayout } from "../../../src/layout/CRM/Settings";
const Tags = () => {
  return (
    <div>
      <Tag />
    </div>
  );
};

Tags.getLayout = getCRMSettingsLayout;
export default Tags;
