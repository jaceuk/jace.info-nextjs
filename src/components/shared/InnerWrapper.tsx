import styles from './InnerWrapper.module.scss';

interface Props {
  children: React.ReactNode;
}

export default function InnerWrapper({ children }: Props) {
  return <div className={styles.innerWrapper}>{children}</div>;
}
