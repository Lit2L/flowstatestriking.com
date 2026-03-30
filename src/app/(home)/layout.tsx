import PremiumNavbar from '../components/premium-navbar'
import Provider from '../components/provider'
import SmoothScroller from '../components/smooth-scroller'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Flow State Striking',
	description: 'Train to stay calm under pressure.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className='bg-neutral-950 text-neutral-200 antialiased inter.className'>
				<SmoothScroller />
				<PremiumNavbar />
				<Provider>
					<main className='pt-16'>{children}</main>
					<Analytics />
				</Provider>
				<Analytics />
			</body>
		</html>
	)
}
