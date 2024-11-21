import Layout from '@theme/Layout';
import React from 'react';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import PackageManagerScreenshots from '@site/src/pages/products/DCIM/_components/PackageManagerScreenshots';
import Link from '@docusaurus/Link';

function PackageManagerHeader() {
  return (
    <section className="margin-top--lg margin-bottom--lg text--center">
      <Heading as="h1" className={styles.heroHeading}>
        CloudNOS DCIM
      </Heading>
      <p>
        <strong>Realize intelligent management of data center facilities.</strong>
      </p>
      <Link
        className="button button--secondary"
        to="/pricing">
        Get started
      </Link>
    </section>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title="CloudNOS DCIM"
      description="Realize intelligent management of data center facilities.">
      <main className="margin-vert--lg">
        <PackageManagerHeader />
        <PackageManagerScreenshots />
      </main>
    </Layout>
  );
}
