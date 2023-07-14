import { Container } from '@/shared/ui'
import { FooterLogoLink, FooterNav } from './ui'
import { FooterInformation } from './ui/FooterInformation'

export const Footer = () => {
	return (
		<footer className='py-[80px] h-[284px]'>
			<Container className='flex justify-between'>
				<div className='flex items-center gap-[113px]'>
					<div className='flex flex-col gap-[62px]'>
						<FooterLogoLink />
						<span className='max-w-[195px] w-full'>
							© 2022 Netowork
							<br />
							Все права защищены
						</span>
					</div>
					<FooterNav />
				</div>
				<FooterInformation />
			</Container>
		</footer>
	)
}
