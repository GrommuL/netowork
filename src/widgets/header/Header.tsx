import { Button } from '@/shared/ui'
import { HeaderLinkButton, HeaderLogoLinkButton } from './ui'

export const Header = () => {
	return (
		<header className='container flex items-center justify-between h-[80px]'>
			<div className='flex items-center gap-[48px]'>
				<HeaderLogoLinkButton />
				<div className='flex items-center'>
					<HeaderLinkButton label='Создать задание' href='/' />
					<HeaderLinkButton label='Найти задание' href='/' />
				</div>
			</div>
			<Button label='Вход и регистрация' />
		</header>
	)
}
