import axios from 'axios';
import styles from '../../styles/Post.module.css';
import Button from '../../components/Button';
import { ChangeEvent, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import TextArea from '../../components/TextArea';
import PostCard from '../../components/PostCard';
import Link from 'next/link';

export default function GetPostById({ post }) {
	const router = useRouter();
	const [content, setContent] = useState('');

	const textAreaMemo = useMemo(() => {
		return (
			<div className="flex-1">
				<TextArea
					cross
					value={content}
					row={1}
					resize
					onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
						setContent(e.target.value);
					}}
				/>
			</div>
		);
	}, [content]);

	const handleSubmit = () => {
		if (content !== '') {
			axios
				.post(
					'http://localhost:3001/posts',
					{
						content: content,
						parent: post._id,
					},
					{
						headers: {
							Authorization: `Bearer ${localStorage.getItem('token')}`,
						},
					}
				)
				.then(function () {
					router.push(`http://localhost:3000/posts/${post._id}`).then();
					setContent('');
				})
				.catch(function (error) {
					router.push('http://localhost:3000/login').then();
					console.log(error);
				});
		}
	};

	const renderTextArea = useMemo(() => {
		return (
			<div className={styles.commentArea}>
				{textAreaMemo}
				<div className={styles.commentButton}>
					<Button className="right-0" variant="contained" onClick={handleSubmit}>
						Comment
					</Button>
				</div>
			</div>
		);
	}, [content]);

	return (
		<div className={styles.main}>
			<div className={styles.mainPost}>
				<div className={styles.name}>
					<p className={styles.authorFullName}>
						{post.author.firstname} {post.author.lastname}
					</p>
					<Link href={`/users/${post.author.username}`}>
						<p className={styles.authorUserName}>@{post.author.username}</p>
					</Link>
				</div>
				<div>
					<p className={styles.content}>{post.content}</p>
				</div>
				<div className={styles.bottomPost}>
					<span className={styles.date}>
						{post.createDate.split('T')[0]} {post.createDate.split('T')[1].split('.')[0]}
					</span>
				</div>
			</div>
			<div className={styles.childPost}>
				{renderTextArea}
				{post.comments.map((comment) => {
					return <PostCard key={comment._id} post={comment} />;
				})}
			</div>
		</div>
	);
}

export async function getServerSideProps(context) {
	const axiosResponse = await axios.get(`http://localhost:3001/posts/${context.query.id}`);
	const post = axiosResponse.data;
	return {
		props: {
			post,
		},
	};
}
