//import styles
import styles from './styles.module.css';
import Image from 'next/image';

export default function DalleImage({ header, content, prompt }) {

  console.log('styles', styles.imageContainer)

  return (
    <div className={styles.imageContainer}>
      <div className={styles.image}>
        <div style={{position: 'relative', minHeight: '100%'}}>
          <Image
            src="/sean-oulashin-KMn4VEeEPR8-unsplash.jpg"
            fill={true}
          />
        </div>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.header}>{header}</div>
        <div className={styles.content}>{content}</div>
      </div>
    </div>
  )
}