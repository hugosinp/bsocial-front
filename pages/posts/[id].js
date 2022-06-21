import axios from "axios";
import styles from '../../styles/Post.module.css';

export default function GetPostById({post}) {
	console.log(post)
	return (
		<div className={styles.main}>
			<div className={styles.mainPost}>
				<div>
					<p className={styles.authorFullName}>{post.author.firstname} {post.author.lastname}</p>
					<p className={styles.authorUserName}>@{post.author.username}</p>
				</div>
				<div><h3 className={styles.content}>{post.content}</h3></div>
				<div><span className={styles.date}>{post.createDate.split('T')[0]} {post.createDate.split('T')[1].split('.')[0]}</span></div>
			</div>
		</div>
	);
}

export async function getServerSideProps(context) {
	console.log(context.query.id)
	const axiosResponse = await axios.get(`http://localhost:3001/posts/${context.query.id}`);
	const post = axiosResponse.data;
	return {
		props: {
			post
		},
	};
}
