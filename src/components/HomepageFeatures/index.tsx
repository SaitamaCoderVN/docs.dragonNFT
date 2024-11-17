import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Github',
    Svg: require('@site/static/img/1.svg').default,
    description: (
      <>
        Github open source to everyone
      </>
    ),
    link: 'https://github.com/SaitamaCoderVN/docs.dragonNFT',
  },
  {
    title: 'Website',
    Svg: require('@site/static/img/2.svg').default,
    description: (
      <>
        Where people can interact with our Dragon SoulBound platform
      </>
    ),
    link: 'https://drago-nft.vercel.app',
  },
  {
    title: 'X Social',
    Svg: require('@site/static/img/3.svg').default,
    description: (
      <>
        Where we interact with society and our communities
      </>
    ),
    link: 'https://x.com/Dragon_SB_NFT',
  },
];

function Feature({title, Svg, description, link}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">
          <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
        </Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
