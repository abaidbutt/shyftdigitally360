import React from "react";
import { getCRMLayout } from "../../../src/layout/CRM/Topbar";
import { getCRMSettingsLayout } from "../../../src/layout/CRM/Settings";
import ContactField from "../../../src/components/CRM/Settings/ContactField";
const ContactFields = () => {
  return (
    <>
      <ContactField />
    </>
  );
};

ContactFields.getLayout = getCRMSettingsLayout;
export default ContactFields;
