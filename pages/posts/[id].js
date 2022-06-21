import {useEffect, useState} from 'react';
import axios from "axios";
import { useRouter } from 'next/router'

export default function GetPostById() {
	const router = useRouter()
	const { id } = router.query;
	console.log(id)
	const [post, setPost] = useState('');
	useEffect(() => {
		axios
			.get(`http://localhost:3001/posts/${id}`)
			.then(function (response) {
				setPost(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);

	return (
		<div>
			<div>{post.content}</div>
		</div>
	);
}
