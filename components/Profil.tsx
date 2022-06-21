import clsx from 'clsx';
import React from 'react';

// import Button from './Button';

interface ProfileProps {
	fullWidth?: boolean;
}

const Profile: React.FC<ProfileProps> = ({ fullWidth = false }) => {
	return (
		<div
			className={clsx({
				'flex bg-darkGray text-white h-20': true,
				'w-full': fullWidth,
			})}
		>
			<div className="shrink-0">
				<img
					className="h-16 w-16 object-cover rounded-full"
					src="https://cdn.inprnt.com/thumbs/5d/12/5d12122f9871a0c7fca0760d0bee2da0.jpg?response-cache-control=max-age=2628000"
					alt="Current profile photo"
				/>
			</div>
			<label className="block flex-1">
				<div className="flex">
					<p>firstname&#8239;</p>
					<p>lastname&#8239;</p>
					<p className="cursor-pointer">@username</p>
				</div>
			</label>
			<div>{/* <Button variant="contained">Edit Profile</Button> */}</div>
		</div>
	);
};

export default Profile;
