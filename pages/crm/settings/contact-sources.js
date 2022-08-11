import React from "react";
import { getCRMLayout } from "../../../src/layout/CRM/Topbar";
import { getCRMSettingsLayout } from "../../../src/layout/CRM/Settings";
import ContactSource from "../../../src/components/CRM/Settings/ContactSource";
const ContactSources = () => {
  return (
    <>
      <ContactSource />
    </>
  );
};

ContactSources.getLayout = getCRMSettingsLayout;
export default ContactSources;
