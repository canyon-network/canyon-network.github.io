import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: "Super Light Storage Consensus",
    imageUrl: "img/undraw_docusaurus_tree.svg",
    description: (
      <>
        It's nonsense to provide the storage service in a hard way as the cost
        for building and running such an system will eventually imposed on the
        clients, rendering a truely low storage cost impossible in the long
        term. Canyon adopts the incentive-driven Proof of Access consensus
        initially deployed by Arweave, but on top of PoS instead of PoW,
        encouraging the validators to earn more rewards by storing more data, no
        sophisticated and hardware-demanding ZK proof, no need for particular
        TEE hardware.
      </>
    ),
  },
  {
    title: "High Data Durability",
    imageUrl: "img/undraw_docusaurus_mountain.svg",
    description: (
      <>
        One substantial advantage of combining PoS with PoA is able to guarantee
        a high data durability in theory. 12 nices (99.9999999999%) durability
        can be achieved with 200 validators and each of them stores at least 10%
        of the entire network storage, in a permanent way.
      </>
    ),
  },
  {
    title: "Retrieval-driven Data Redundancy",
    imageUrl: "img/undraw_docusaurus_react.svg",
    description: (
      <>
        It's unsound to require the storage miners to provide the retrieval
        services for free because the bandwith is not definitely zero cost and
        valuable in fact. In Canyon, client needs to pay for the data retrieval,
        which in return adpatively incentives the data copies for these data
        with a frequent read need as validators can earn some extra retrieval
        fee aside from the basic storage reward.
      </>
    ),
  },
  {
    title: "Forkless Upgrade and On-chain Governance",
    imageUrl: "img/undraw_docusaurus_mountain.svg",
    description: (
      <>
        Implemented using Substrate framework which is the same framework that
        Polkadot is built on, making easier interoperability with Polkadot in
        the future. The forkless runtime upgrade feature ensures the chain is
        capable of iterating fastly.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--6", styles.feature)}>
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
