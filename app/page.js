import Image from 'next/image'

export default function Home() {
    return (
        <main className="min-h-screen bg-cover bg-no-repeat bg-fixed relative" style={{ backgroundImage: "url('/home.jpg')" }}>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="text-white text-center mt-30">
                    <h1 className="text-4xl font-bold mb-4">Bienvenidos a CAPELLARI!</h1>
                    <p className="text-lg mb-8 font-bold">La mejor eComerce del mercado.</p>
                </div>
            </div>
        </main>
    )
}
