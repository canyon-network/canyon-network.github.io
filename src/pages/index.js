import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: "Forkless Upgrade and On-chain Governance",
    imageUrl: "img/undraw_docusaurus_mountain.svg",
    description: (
      <>
        Implemented by Substrate framework which is the same framework that
        Polkadot is built on, making easier interoperability with Polkadot in
        the future.
      </>
    ),
  },
  {
    title: "Lightweight Incentive-driven Storage Consensus",
    imageUrl: "img/undraw_docusaurus_tree.svg",
    description: (
      <>
        Inspired by Arweave&apos;s Proof of Access, fused with PoS, more reward
        for the validators by storing more data, no sophisticated and
        hardware-demanding zero knowledge proof, no need for particular TEE
        hardware.
      </>
    ),
  },
  {
    title: "Towards the Future Storage-based Computation Paradigm",
    imageUrl: "img/undraw_docusaurus_react.svg",
    description: (
      <>
        The first goal of canyon network is to provide services for the
        storage-based DAPP ecosystem like{" "}
        <a href="https://ever.finance">ever.finance</a>, and then the more
        general permanent decentralized storage needs for Web3.0.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
