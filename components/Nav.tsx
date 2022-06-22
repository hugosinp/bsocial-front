import Link from 'next/link';
import styles from '../styles/Nav.module.css';
import {
	AiOutlineHome,
	AiOutlineMessage,
	AiOutlineNotification,
	AiOutlineSearch,
	AiOutlineSetting,
	AiOutlineSmile,
	AiOutlineUser,
} from 'react-icons/ai';

const Nav = () => {
	return (
		<>
			<div className={styles.nav}>
				<div className={styles.link}>
					<AiOutlineHome />
					<Link href={'/home'}>
						<p className={styles.linkText}>Home</p>
					</Link>
				</div>
				<div className={styles.link}>
					<AiOutlineSearch />
					<Link href={'/home'}>
						<p className={styles.linkText}>Explore</p>
					</Link>
				</div>
				<div className={styles.link}>
					<AiOutlineSmile />
					<Link href={'/home'}>
						<p className={styles.linkText}>Communities</p>
					</Link>
				</div>
				<div className={styles.link}>
					<AiOutlineNotification />
					<Link href={'/home'}>
						<p className={styles.linkText}>Notification</p>
					</Link>
				</div>
				<div className={styles.link}>
					<AiOutlineMessage />
					<Link href={'/home'}>
						<p className={styles.linkText}>Messages</p>
					</Link>
				</div>
				<div className={styles.link}>
					<AiOutlineUser />
					<Link href={'/home'}>
						<p className={styles.linkText}>Profile</p>
					</Link>
				</div>
				<div className={styles.link}>
					<AiOutlineSetting />
					<Link href={'/home'}>
						<p className={styles.linkText}>Settings</p>
					</Link>
				</div>
			</div>
		</>
	);
};
export default Nav;
