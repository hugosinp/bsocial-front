import axios from 'axios';
import styles from '../../styles/Post.module.css';
import Button from '../../components/Button';
import { ChangeEvent, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import TextArea from '../../components/TextArea';
import PostCard from '../../components/PostCard';
import Nav from '../../components/Nav';

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
		<div className={styles.global}>
			<Nav />
			<div className={styles.main}>
				<div className={styles.mainPost}>
					<PostCard key={post._id} post={post} />
				</div>
				<div className={styles.childPost}>
					{renderTextArea}
					{post.comments.map((comment) => {
						return <PostCard key={comment._id} post={comment} />;
					})}
				</div>
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
