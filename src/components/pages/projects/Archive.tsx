import InnerWrapper from '@components/shared/InnerWrapper';
import content from '@content/archive.json';
import styles from './Archive.module.scss';

function compareStrings(a: string, b: string) {
  a = a.toLowerCase();
  b = b.toLowerCase();

  return a < b ? -1 : a > b ? 1 : 0;
}

export default function Archive() {
  const projects = content.projects.sort(function (a, b) {
    return compareStrings(a.title, b.title);
  });

  return (
    <>
      <section className="with-gradient">
        <InnerWrapper>
          <div className={styles.archive}>
            <div className={styles.intro}>
              <h1>{content.title}</h1>
              <p>{content.text}</p>
            </div>

            <div className={styles.table}>
              <div className={styles.row}>
                <div className={`${styles.cell} ${styles.heading}`}>Client</div>
                <div className={`${styles.cell} ${styles.heading}`}>Description</div>
              </div>

              {projects.map((project, index) => (
                <div className={styles.row} key={index}>
                  <div className={`${styles.cell} ${styles.title}`}>{project.title}</div>
                  <div className={styles.cell}>{project.text}</div>
                </div>
              ))}
            </div>
          </div>
        </InnerWrapper>
      </section>
    </>
  );
}
