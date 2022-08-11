import React from "react";
import { getCRMLayout } from "../../../src/layout/CRM/Topbar";
import { getCRMSettingsLayout } from "../../../src/layout/CRM/Settings";
import HistoryFlag from "../../../src/components/CRM/Settings/HistoryFlag";
const HistoryFlags = () => {
  return (
    <>
      <HistoryFlag />
    </>
  );
};

HistoryFlags.getLayout = getCRMSettingsLayout;
export default HistoryFlags;
