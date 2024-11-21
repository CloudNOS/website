import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faGitAlt,
  faSkyatlas,
} from '@fortawesome/free-brands-svg-icons';
import {
  faChartLine,
  faCheckDouble,
  faCodeCompare,
  faComments,
  faCubes,
  faGears,
} from '@fortawesome/free-solid-svg-icons';
import {IconDefinition} from '@fortawesome/free-regular-svg-icons';
import React from 'react';

type FeatureItem = {
  title: string;
  icon: IconDefinition;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Infrastructure management',
    icon: faCubes,
    description: (
      <>
        CloudNOS DCIM will you to easily and efficiently manage your entire facility across multiple data centers.
        And the application has a comprehensive management tool, one-click management and setting of switche, PDUs and so on.
      </>
    ),
  },
  {
    title: 'Automation',
    icon: faGitAlt,
    description: (
      <>
        Cloudnos has advanced automation features such as unattended OS installation, automatic OS password reset, 
        switch configuration. And a range of convenience features, Let dedicated servers have the advantages of cloud servers.
      </>
    ),
  },
  {
    title: 'Integration',
    icon: faCodeCompare,
    description: (
      <>
        CloudNOS DCIM integrates with WHMCS, Hostbill, Blesta, and other billing systems. And there is API documentation that can be quickly integrated into your system.
      </>
    ),
  },
];

function Feature({title, icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4', 'margin-top--lg')}>
      <div className={clsx('text--center', styles.iconBorder)}>
        <FontAwesomeIcon icon={icon} size="8x" className={styles.iconHeight} />
      </div>
      <div className="text--center padding-horiz--md margin-top--lg">
        <Heading as="h3" className="">
          {title}
        </Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container margin-top--lg">
        <div className="row">
          <div className="col text--center">
            <Heading as="h2">
            We provide specialized software systems and support services to help your business thrive in the data center sector.
            </Heading>
          </div>
        </div>
        <div className="row">
          {FeatureList.map((item, idx) => (
            <Feature key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
