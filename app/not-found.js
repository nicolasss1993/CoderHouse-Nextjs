"use client"
import Button from '@/components/utils/Button';
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function NotFound() {
    const router = useRouter()

    return (
        <>
            <main className="container m-auto">

                <h1 className="text-4xl text-black my-4">Página no encontrada</h1>
                <hr />
                <div className='flex items-center flex-col justify-center'>
                    <Image
                        src={'/not-found.jpg'}
                        alt={'not-found image'}
                        width={400}
                        height={400}
                    />

                    <Button
                        className='rounded-lg py-2 px-4 bg-green-500'
                        onClick={() => router.back()}
                        text="< Volver"
                    />
                </div>
            </main>
        </>
    )
}