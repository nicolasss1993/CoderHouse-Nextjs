import './globals.css';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import { CartProvider } from '@/utils/context/cartContext';
import { AuthProvider } from '@/utils/context/authContext';

export const metadata = {
	title: 'Capellari!',
	description: 'Pagina de inicio de Capellari',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
			    <AuthProvider>
					<CartProvider>
						<Header />
						<div className="bg-body pt-3 min-h-screen">
							{children}
						</div>
					</CartProvider>
				</AuthProvider>
			</body>
		</html>
	)
}
