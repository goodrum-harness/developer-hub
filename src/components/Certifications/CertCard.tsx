import React from "react";
import clsx from "clsx";
// import Tooltip from "rc-tooltip";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import "rc-tooltip/assets/bootstrap.css";
import styles from "./CertCard.module.scss";

export enum certType {
  Developer = "Developer",
  Administrator = "Administrator",
  Architect = "Architect",
}
const stars = {
  [certType.Developer]: 1,
  [certType.Administrator]: 2,
  [certType.Architect]: 3,
};

export type CardItem = {
  title: string;
  module: string;
  type: certType;
  description: JSX.Element | string;
  version: string;
  link?: string;
};

export default function CertCard({
  title,
  description,
  type,
  module,
  version,
  link = "#",
}: CardItem) {
  const { siteConfig: { baseUrl = "/" } = {} } = useDocusaurusContext();
  return (
    <Link to={link} className={clsx(styles.certCard, styles[module])}>
      <div>
        <div className={styles.moduleLine}>
          <h6>
            <img src={`${baseUrl}img/icon_${module}.svg`} /> {type}
          </h6>
          <span>
            {[...new Array(stars[type] || 0)].map(() => (
              <i className="fa-solid fa-star"></i>
            ))}
          </span>
        </div>
        <h4>{title}</h4>
        <p>{description}</p>
        <div className={styles.productVersion}>
          <strong>Product version</strong>: {version}
        </div>
      </div>
    </Link>
  );
}

/*
export default function TutorialCard(props): JSX.Element {
  return (
    <div className={styles.spaceBetween}>
      {props.featuredCard
        ? props.FeatureList.map((props, idx) => (
            <Card key={idx} {...props} featuredCard={true} />
          ))
        : props.FeatureList.map((props, idx) => (
            <Card key={idx} {...props} featuredCard={false} />
          ))}
    </div>
  );
}
*/
