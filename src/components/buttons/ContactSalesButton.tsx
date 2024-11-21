import React, {FC} from 'react';
import Link from '@docusaurus/Link';

interface ContactSalesButtonProps {
  additionalClassNames: string;
}

const ContactSalesButton: FC<ContactSalesButtonProps> = ({
  additionalClassNames,
}) => (
  <Link
    className={`cloudnos-telemetry-sales button button--info ${additionalClassNames}`}
    to="https://www.cloudnos.com">
    Contact Sales
  </Link>
);

export default ContactSalesButton;
