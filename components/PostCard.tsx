import Link from "next/link";
import styles from '../styles/Home.module.css';

const PostCard = ({post}) => {

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <div><h2>{post.author}</h2></div>
                <div>{post.createDate.split('T')[0]} {post.createDate.split('T')[1].split('.')[0]}</div>
            </div>
            <Link href={`/posts/${post._id}`}>
                <div className={styles.content}>
                    <p>{post.content}</p>
                </div>
            </Link>
        </div>
    );
}
export default PostCard;
