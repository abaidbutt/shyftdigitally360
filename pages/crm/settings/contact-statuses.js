import React from "react";
import { getCRMLayout } from "../../../src/layout/CRM/Topbar";
import { getCRMSettingsLayout } from "../../../src/layout/CRM/Settings";
import ContactStatus from "../../../src/components/CRM/Settings/ContactStatus";
const ContactStatuses = () => {
  return (
    <>
      <ContactStatus />
    </>
  );
};

ContactStatuses.getLayout = getCRMSettingsLayout;
export default ContactStatuses;
