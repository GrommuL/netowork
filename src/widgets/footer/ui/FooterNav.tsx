import { Link } from 'react-router-dom'
import { nav } from '../lib'

export const FooterNav = () => {
	return (
		<nav>
			<ul className='flex flex-col gap-[16px]'>
				{nav.map((link) => (
					<li className='hover:text-primaryHover transition' key={link.label}>
						<Link to={link.href}>{link.label}</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}
