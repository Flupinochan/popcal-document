import type { ReactNode } from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function DownloadSection() {
  const latestVersion = "/popcal-document/downloads/versions/v1.3.0/app-arm64-v8a-release.apk";
  return (
    <section className={styles.downloadSection}>
      <div className="container">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <Heading as="h2" className="text--center margin-bottom--lg">
              アプリダウンロード
            </Heading>

            <div className="text--center margin-bottom--lg">
              <Heading as="h3" className="margin-bottom--md">
                最新版
              </Heading>
              <a
                href={latestVersion}
                className="button button--primary button--lg"
                target="_blank"
                download="app-release.apk"
              >
                Android APK をダウンロード
              </a>
            </div>

            <div>
              <Heading as="h3" className="margin-bottom--md">
                バージョン別ダウンロード
              </Heading>
              <ul className={styles.versionList}>
                <li className="margin-bottom--sm">
                  <a
                    href="/popcal-document/downloads/versions/v1.0.0/app-release.apk"
                    target="_blank"
                    download="app-v1.0.0-release.apk"
                  >
                    v1.0.0
                  </a>
                  {' - 2025/08/11 初リリース'}
                </li>
                <li className="margin-bottom--sm">
                  <a
                    href={latestVersion}
                    target="_blank"
                    download="app-v1.3.0-release.apk"
                  >
                    v1.3.0
                  </a>
                  {' - 2025/08/16 スキップ・月営業日通知 機能を追加'}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <DownloadSection />
      </main>
    </Layout>
  );
}