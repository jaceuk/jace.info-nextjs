import Image from 'next/image';
import Card from '@components/shared/Card';
import Lighthouse from './Lighthouse';
import styles from './Project.module.scss';

interface project {
  key: number;
  project: {
    title: string;
    slug: string;
    type: string;
    intro: string;
    tech: string[];
    date: string;
    lighthouseScores: number[];
  };
}

export default function Project({ project }: project) {
  const techTerms = project.tech.sort();

  return (
    <div className={styles.project}>
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
            {techTerms.map((term, index) => (
              <span key={index}>{term}</span>
            ))}
          </p>
          <Lighthouse scores={project.lighthouseScores} />
        </Card>
      </div>
    </div>
  );
}
