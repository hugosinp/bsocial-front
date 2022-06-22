import axios from 'axios';

export default function GetUserByUsername({ user }) {
	console.log(user);
	return (
		<div>
			<div>
				<h3>
					{user.firstname} {user.lastname}
				</h3>
			</div>
			<div>
				<h4>@{user.username}</h4>
			</div>
		</div>
	);
}

export async function getServerSideProps(context) {
	const axiosResponse = await axios.get(`http://localhost:3001/users/pb/${context.query.username}`);
	const user = axiosResponse.data;
	return {
		props: {
			user: user,
		},
	};
}
