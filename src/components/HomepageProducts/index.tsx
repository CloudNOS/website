import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import React from 'react';
import ThemedImage from '@theme/ThemedImage';
import Link from '@docusaurus/Link';

type ScreenshotItem = {
  title: string;
  description: JSX.Element;
  screenshotAltText: string;
  lightScreenshotUrl: string;
  darkScreenshotUrl: string;
};

const ScreenshotList: ScreenshotItem[] = [
  {
    title: 'Device management',
    description: (
      <><strong><em>Cloudnos will you to easily and efficiently manage your 
      entire facility across multiple data centers</em></strong> 
      <br />
      <br />
      <li>Data Centers & Racks</li>
      <li>Bare Metal Dedicated Servers</li>
      <li>Switch & PDU</li>
      <li>Spare Hardware</li> <br />
        <Link
          className="button button--secondary margin-top--md"
          to="/products/package-manager">
          Learn more
        </Link>
      </>
    ),
    screenshotAltText: 'Glasskube overview page',
    lightScreenshotUrl:
      'https://github.com/glasskube/glasskube/assets/3041752/d3e764e4-7ee0-4ad8-b0eb-d0ebf219160f',
    darkScreenshotUrl:
      'https://github.com/glasskube/glasskube/assets/3041752/323994d6-6b08-4dca-ac59-d29ae6b37f94',
  },
  {
    title: 'Automated tools',
    description: (
      <>
       <strong><em>Cloudnos DCIM has a number of automation features that allow 
        admin to handle daily tasks with ease.</em></strong> 
      <br />
      <br /> 
      <li>Automatic OS installation</li>
      <li>Reset Password</li>
      <li>Automatic configuration IP address</li>
      <li>Customize partitions and RAID</li>
      <li>Check hardware information and health</li>
      <li>Server & Switch console</li><br />
        <Link
          className="button button--secondary margin-top--md"
          to="/products/hub">
          Learn more
        </Link>
      </>
    ),
    screenshotAltText: 'Glasskube settings page',
    lightScreenshotUrl:
      'https://github.com/glasskube/glasskube/assets/3041752/e8565cf7-6089-4b82-b169-91f5b3ef4c33',
    darkScreenshotUrl:
      'https://github.com/glasskube/glasskube/assets/3041752/cf1f1983-78c8-4bb4-9d47-86dbf3a16c4e',
  },
];

function Screenshot(item: ScreenshotItem) {
  return (
    <>
      <div className={clsx('col col--3')}>
        <div className={styles.sticky}>
          <Heading as="h3" className={styles.borderLeft}>
            {item.title}
          </Heading>
          <p>{item.description}</p>
        </div>
      </div>
      <div className={clsx('col col--9')}>
        <ThemedImage
          alt={item.screenshotAltText}
          sources={{
            light: item.lightScreenshotUrl,
            dark: item.darkScreenshotUrl,
          }}
        />
      </div>
    </>
  );
}

export default function HomepageProducts(): JSX.Element {
  return (
    <section className={styles.screenshots}>
      <div className="container margin-top--lg">
        <div className="row">
          <div className="col text--center">
            <Heading as="h2">
              Let CloudNOS DCIM take care about your Data center infrastructure.
            </Heading>
          </div>
        </div>
        {ScreenshotList.map((item, idx) => (
          <div className="row" key={idx}>
            <Screenshot {...item} />
          </div>
        ))}
      </div>
    </section>
  );
}
