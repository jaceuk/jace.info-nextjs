import InnerWrapper from '@/components/shared/InnerWrapper';
import content from '@/content/projects.json';
import styles from './FeaturedProjects.module.scss';
import Project from './Project';

export default function FeaturedProjects() {
  return (
    <>
      <section className="with-gradient">
        <InnerWrapper>
          <div className={styles.projects}>
            <div className={styles.intro}>
              <h1>{content.title}</h1>
              <p>{content.text}</p>
            </div>

            {content.projects.map((project, index) => (
              <Project key={index} project={project} />
            ))}
          </div>
        </InnerWrapper>
      </section>
    </>
  );
}
