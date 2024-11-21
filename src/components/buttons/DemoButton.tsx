import React, {FC} from 'react';
import Link from '@docusaurus/Link';

interface DemoButtonProps {
  additionalClassNames: string;
}

const DemoButton: FC<DemoButtonProps> = ({additionalClassNames}) => (
  <Link
    className={`CloudNOS-DCIM-demo button button--accent ${additionalClassNames}`}
    to="https://www.cloudnos.com">
    Request Demo
  </Link>
);

export default DemoButton;
