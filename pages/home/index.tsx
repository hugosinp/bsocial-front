import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import styles from '../../styles/Home.module.css';
import PostCard from '../../components/PostCard';
import Modal from '../../components/Modal';
import { Post } from '../../components/typeScriptInclude';
import Nav from '../../components/Nav';

export default function Home() {
	const [posts, setPosts] = useState([]);

	const fetchPost = async () => {
		await axios
			.get('http://localhost:3001/posts')
			.then(function (response) {
				setPosts(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	useEffect(() => {
		fetchPost();
	}, []);

	const modalMemo = useMemo(() => {
		return (
			<>
				<Modal title="Create a post" type="post" onClick={() => fetchPost()} />
			</>
		);
	}, []);

	return (
		<div className={styles.global}>
			<Nav />
			<div className={styles.main}>
				<div className={styles.top}>
					<h1 className={`${styles.title} mb-4`}>Welcome home</h1>
					<div className={styles.postButton}>{modalMemo}</div>
				</div>
				<div>
					{posts.map((post: Post) => {
						if (post) return <PostCard key={post._id} post={post} />;
					})}
				</div>
			</div>
		</div>
	);
}
