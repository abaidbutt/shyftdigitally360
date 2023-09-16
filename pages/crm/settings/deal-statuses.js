import React from "react";

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
