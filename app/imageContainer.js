import classNames from 'classnames';
import styles from './styles.module.css';
import Image from 'next/image';
import localFont from '@next/font/local';

const HolidayExtrasSansBold = localFont({
  src: '../public/HolidayExtrasSans/Web/HolidayExtrasSans-Bold.woff2'
})

export default function ImageContainer({ header, content, url }) {
  console.log('url is: ', url)
  return (
    <div className={styles.imageContainer}>
      <div className={styles.image}>
        <div style={{position: 'relative', minHeight: '100%'}}>
          <Image
            src={url}
            alt='AI generated image'
            fill={true}
            placeholder='blur'
            blurDataURL='/sean-oulashin-KMn4VEeEPR8-unsplash.jpg'
            style={{objectFit: "contain"}}
          />
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={classNames(`${styles.header} ${HolidayExtrasSansBold.className}`)}>{header}</div>
        <div className={styles.content}>{content}</div>
      </div>
    </div>
  )
}