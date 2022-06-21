import axios from "axios";
import styles from '../../styles/Post.module.css';
import Button from "../../components/Button";
import {ChangeEvent, useMemo, useState} from "react";
import {useRouter} from "next/router";
import TextArea from "../../components/TextArea";

export default function GetPostById({post}) {
	const router = useRouter();
	const [content, setContent] = useState('');

	const handleContent = (e) => {
		setContent(e.target.value);
	};

	const handleSubmit = () => {
		if (content !== '') {
			console.log(content)
			axios
				.post('http://localhost:3001/posts', {
					content: content,
					parent: post._id
				}, {
					headers: {
						'Authorization': `Bearer ${localStorage.getItem("token")}`,
					}
				})
				.then(function () {
					router.push(`http://localhost:3000/posts/${post._id}`).then();
				})
				.catch(function (error) {
					console.log(error);
				});
		}
	};

	const renderTextArea = useMemo(() => {
		return (
			<div className={styles.commentArea}>
				<textarea className={styles.textArea} name="body" rows={1}
						  onChange={handleContent}
						  value={content}/>
				<div className={styles.commentButton}>
					<Button className="right-0" variant='contained' onClick={handleSubmit}>Comment</Button>
				</div>
			</div>
		);
	}, [content]);

	return (
		<div className={styles.main}>
			<div className={styles.mainPost}>
				<div className={styles.name}>
					<p className={styles.authorFullName}>{post.author.firstname} {post.author.lastname}</p>
					<p className={styles.authorUserName}>@{post.author.username}</p>
				</div>
				<div><p className={styles.content}>{post.content}</p></div>
				<div className={styles.bottomPost}>
					<span className={styles.date}>{post.createDate.split('T')[0]} {post.createDate.split('T')[1].split('.')[0]}</span>
				</div>
				{renderTextArea}
			</div>
			<div className={styles.childPost}>
				<h5>children posts here...</h5>
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
