import Image from 'next/image'
import styles from './postCard.module.css'
import Link from 'next/link'
import {PostCardProps} from '@/app/models/postCardProps'


const PostCard = ({imageSrc,title,description,link}:PostCardProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.imgContainer}>
                <Image src={imageSrc} alt={title} fill className={styles.img}/>
            </div>
            <div className={styles.content}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.description}>{description}</p>
                <Link href={link} className={styles.link}>
                    Read More
                </Link>
            </div>
        </div>
    )
}

export default PostCard