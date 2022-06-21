import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../../styles/Home.module.css';
import PostCard from '../../components/PostCard';

export default function Home() {
	const [posts, setPosts] = useState([]);
	const fetchPost = async () => {
		await axios
			.get('http://localhost:3001/posts/')
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

	return (
		<div className={styles.main}>
			<h1 className={styles.title}>Welcome home</h1>
			{posts.map((post) => {
				return <PostCard key={post._id} post={post} />;
			})}
		</div>
	);
}
