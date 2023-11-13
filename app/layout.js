import './globals.css';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import { CartProvider } from '@/utils/cartContext';

export const metadata = {
	title: 'Capellari!',
	description: 'Pagina de inicio de Capellari',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<CartProvider>
					<Header />
					<div className="bg-body pt-3 min-h-screen">
						{children}
					</div>
				</CartProvider>
			</body>
		</html>
	)
}
