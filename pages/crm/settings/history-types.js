import React from "react";

import { getCRMSettingsLayout } from "../../../src/layout/CRM/Settings";
import HistoryType from "../../../src/components/CRM/Settings/HistoryType";
const HistoryTypes = () => {
  return (
    <div>
      <HistoryType />
    </div>
  );
};

HistoryTypes.getLayout = getCRMSettingsLayout;
export default HistoryTypes;
