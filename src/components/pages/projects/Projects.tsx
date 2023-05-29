import Image from 'next/image';
import InnerWrapper from '@components/shared/InnerWrapper';
import Card from '@components/shared/Card';
import Lighthouse from './Lighthouse';
import content from '@content/projects.json';
import styles from './Projects.module.scss';

interface project {
  title: string;
  type: string;
  intro: string;
  tech: string[];
  date: string;
  featured: boolean;
}

export default function Projects() {
  return (
    <section className="with-gradient">
      <InnerWrapper>
        <div className={styles.projects}>
          <div className={styles.intro}>
            <h1>{content.title}</h1>
            <p>{content.text}</p>
          </div>

          {content.projects.map((project, index) => (
            <div key={index} className={styles.project}>
              <div className={styles.image}>
                <Image src={`/${project.slug}.jpg`} alt="" fill />
              </div>

              <div className={styles.card}>
                <Card>
                  <div className={styles.title}>
                    <div className={styles.type}>{project.type}</div>
                    <h2>{project.title}</h2>
                  </div>
                  <p>{project.intro}</p>

                  <h3>Tech stack</h3>
                  <p className={styles.tech}>
                    {project.tech.map((term, index) => (
                      <span key={index}>{term}</span>
                    ))}
                  </p>
                  <Lighthouse scores={project.lighthouseScores} />
                </Card>
              </div>
            </div>
          ))}
        </div>
      </InnerWrapper>
    </section>
  );
}
