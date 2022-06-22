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
import { useRouter } from 'next/router';

const Nav = () => {
	const router = useRouter();
	const currentRoute = router.pathname;
	return (
		<>
			<div className={styles.nav}>
				<div className={styles.link}>
					<AiOutlineHome />
					<Link href={'/home'}>
						<p className={currentRoute === '/home' ? styles.linkTextActive : styles.linkTextPassive}>Home</p>
					</Link>
				</div>
				<div className={styles.link}>
					<AiOutlineSearch />
					<Link href={'/home'}>
						<p className={currentRoute === '/search' ? styles.linkTextActive : styles.linkTextPassive}>Explore</p>
					</Link>
				</div>
				<div className={styles.link}>
					<AiOutlineSmile />
					<Link href={'/home'}>
						<p className={currentRoute === '/communities' ? styles.linkTextActive : styles.linkTextPassive}>Communities</p>
					</Link>
				</div>
				<div className={styles.link}>
					<AiOutlineNotification />
					<Link href={'/home'}>
						<p className={currentRoute === '/notifications' ? styles.linkTextActive : styles.linkTextPassive}>Notifications</p>
					</Link>
				</div>
				<div className={styles.link}>
					<AiOutlineMessage />
					<Link href={'/home'}>
						<p className={currentRoute === '/messages' ? styles.linkTextActive : styles.linkTextPassive}>Messages</p>
					</Link>
				</div>
				<div className={styles.link}>
					<AiOutlineUser />
					<Link href={'/home'}>
						<p className={currentRoute === '/profile' ? styles.linkTextActive : styles.linkTextPassive}>Profile</p>
					</Link>
				</div>
				<div className={styles.link}>
					<AiOutlineSetting />
					<Link href={'/home'}>
						<p className={currentRoute === '/settings' ? styles.linkTextActive : styles.linkTextPassive}>Settings</p>
					</Link>
				</div>
			</div>
		</>
	);
};
export default Nav;
