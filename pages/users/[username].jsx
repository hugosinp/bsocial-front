import axios from 'axios';
import PostCard from '../../components/PostCard';
import styles from '../../styles/User.module.css';
import Button from '../../components/Button';
import { AiOutlineMail } from 'react-icons/ai';
import Nav from '../../components/Nav';

export default function GetUserByUsername({ user, posts }) {
	return (
		<div className={styles.global}>
			<Nav />
			<div className={styles.main}>
				<div className={styles.userInfo}>
					<div className={styles.static}>
						<p className={styles.fullname}>
							{user.firstname} {user.lastname}
						</p>
						<p className={styles.username}>@{user.username}</p>
						<div className={styles.emailBlock}>
							<AiOutlineMail />
							<p className={styles.email}>{user.email}</p>
						</div>
					</div>
					<div className={styles.edit}>
						<Button variant="outline">Edit profile</Button>
					</div>
				</div>
				{posts.map((post) => {
					return <PostCard key={post._id} post={post} />;
				})}
			</div>
		</div>
	);
}

export async function getServerSideProps(context) {
	const userResponse = await axios.get(`http://localhost:3001/users/pb/${context.query.username}`);
	const postResponse = await axios.get(`http://localhost:3001/posts/username/${context.query.username}`);
	const user = userResponse.data;
	const posts = postResponse.data;
	return {
		props: {
			user: user,
			posts: posts,
		},
	};
}
