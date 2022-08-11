import React from "react";
import { getCRMLayout } from "../../../src/layout/CRM/Topbar";
import { getCRMSettingsLayout } from "../../../src/layout/CRM/Settings";
import DealStatus from "../../../src/components/CRM/Settings/DealStatus";
const DealStatuses = () => {
  return (
    <>
      <DealStatus />
    </>
  );
};

DealStatuses.getLayout = getCRMSettingsLayout;
export default DealStatuses;
