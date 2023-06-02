import InnerWrapper from '@components/shared/InnerWrapper';
import SkillIcons from './SkillIcons';
import content from '@/content/about.json';
import styles from './About.module.scss';
import Card from '@/components/shared/Card';

export default function About() {
  return (
    <section className="with-gradient">
      <InnerWrapper>
        <div className={styles.about}>
          <div className={styles.intro}>
            <h2>{content.title}</h2>
            <p>{content.text}</p>
          </div>
          <div className={styles.sections}>
            {content.sections.map((section, index) => (
              <Card key={index}>
                <h3>{section.title}</h3>
                {section.text.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
                {section.icons === 'skills' && <SkillIcons />}
              </Card>
            ))}
          </div>
        </div>
      </InnerWrapper>
    </section>
  );
}
