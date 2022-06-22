import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Button from './Button';
import { AiOutlineLike } from 'react-icons/ai';
import axios from 'axios';

const PostCard = ({ post }) => {
	const handleSubmit = () => {
		axios
			.post(
				'http://localhost:3001/likes',
				{
					post: post._id,
				},
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem('token')}`,
					},
				}
			)
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<div className={styles.card}>
			<div className={styles.header}>
				<p className={styles.authorFullName}>
					{post.author.firstname} {post.author.lastname}
				</p>
				<Link href={`/users/${post.author.username}`}>
					<p className={styles.authorUserName}>@{post.author.username}</p>
				</Link>
			</div>
			<Link href={`/posts/${post._id}`}>
				<div>
					<p className={styles.content}>{post.content}</p>
				</div>
			</Link>
			<div className={styles.bottom}>
				<span className={styles.date}>
					{post.createDate.split('T')[0]} {post.createDate.split('T')[1].split('.')[0]}
				</span>
				<div className={styles.likes}>
					<Button variant={'white'} onClick={handleSubmit}>
						<AiOutlineLike />
					</Button>
					<span>{post.likesCount ? post.likesCount : 0}</span>
				</div>
			</div>
		</div>
	);
};

export default PostCard;
