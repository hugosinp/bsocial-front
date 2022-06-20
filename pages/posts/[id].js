import { useState } from 'react';
import axios from "axios";
import { useRouter } from 'next/router'

export default function GetPostById() {
	const router = useRouter()
	const { id } = router.query;
	const [post, setPost] = useState('');
	axios
		.get(`http://localhost:3001/posts/${id}`)
		.then(function (response) {
			setPost(response.data);
		})
		.catch(function (error) {
			console.log(error);
		});
	return (
		<div>{post}</div>
	);
}
