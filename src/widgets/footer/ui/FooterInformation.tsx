import { Link } from 'react-router-dom'
import { footerInformation } from '../lib'

export const FooterInformation = () => {
	return (
		<ul className='flex flex-col gap-[16px]'>
			{footerInformation.map((link) => (
				<li className='hover:text-primaryHover transition' key={link.label}>
					<Link to={link.href}>{link.label}</Link>
				</li>
			))}
		</ul>
	)
}
