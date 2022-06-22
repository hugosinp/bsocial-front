import { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import styles from '../../styles/Home.module.css';
import PostCard from '../../components/PostCard';
import Modal from '../../components/Modal';
import { Post } from '../../components/typeScriptInclude';
import Router from 'next/router';

export default function Home() {
	const [posts, setPosts] = useState([]);

	const callback = () => {
		Router.reload();
	};

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

	const modalMemo = useMemo(() => {
		return (
			<>
				<Modal title="Create a post" type="post" onClick={callback} />
			</>
		);
	}, []);

	return (
		<div className={styles.main}>
			<h1 className={styles.title}>Welcome home</h1>
			{modalMemo}
			{posts.map((post: Post) => {
				if (post) return <PostCard key={post._id} post={post} />;
			})}
		</div>
	);
}
