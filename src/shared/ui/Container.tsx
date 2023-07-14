import clsx from 'clsx'
import { FC, type ReactNode } from 'react'

interface ContainerProps {
	children: ReactNode
	className?: string
}

export const Container: FC<ContainerProps> = ({ children, className }) => {
	return <div className={clsx('container', className)}>{children}</div>
}
