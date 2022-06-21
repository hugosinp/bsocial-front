import Link from 'next/link';
import styles from '../styles/Home.module.css';

const PostCard = ({ post }) => {
	return (
		<div className={styles.card}>
			<div className={styles.header}>
				<p className={styles.authorFullName}>
					{post.author.firstname} {post.author.lastname}
				</p>
				<p className={styles.authorUserName}>@{post.author.username}</p>
			</div>
			<Link href={`/posts/${post._id}`}>
				<div>
					<p className={styles.content}>{post.content}</p>
				</div>
			</Link>
			<div>
				<span className={styles.date}>
					{post.createDate.split('T')[0]} {post.createDate.split('T')[1].split('.')[0]}
				</span>
			</div>
		</div>
	);
};
export default PostCard;
