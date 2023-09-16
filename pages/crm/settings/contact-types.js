import React from "react";

import { getCRMSettingsLayout } from "../../../src/layout/CRM/Settings";
import ContactType from "../../../src/components/CRM/Settings/ContactType";
const ContactTypes = () => {
  return (
    <>
      <ContactType />
    </>
  );
};

ContactTypes.getLayout = getCRMSettingsLayout;
export default ContactTypes;
