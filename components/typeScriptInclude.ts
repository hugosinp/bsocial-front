interface IPostType {
	_id: string;
	author: UserEntity;
	content: string;
	createDate: string;
	comments: Post[];
	parent: Post;
}

interface IUserEntityType {
	id: string;
	firstname: string;
	lastname: string;
	username: string;
	email: string;
	password: string;
	roles: string[];
	posts: Post[];
}

export type Post = IPostType;
export type UserEntity = IUserEntityType;
