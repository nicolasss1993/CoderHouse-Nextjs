import React from 'react';
import ProductAdminTable from '@/components/admin/AdminTable';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: 'Capellari - Admin',
    description: 'Pagina de Admin de Capellari',
}

const Admin = async () => {
    const url = `${process.env.BASE_URL}/api/productos/${category}`
    const items = await fetch(url, {
        cache: 'no-store',
    }).then(r => r.json())

    return (
        <main className="container mx-auto my-8">
            <div className="flex flex-row items-center justify-center">
                <Link href={"/"}>
                    <Image
                        src={"/logo.png"}
                        alt='Capellari logo'
                        width={70}
                        height={70}
                    />
                </Link>
                <h1 className="text-3xl font-bold mb-4">Panel de Administración</h1>
            </div>
            <hr />
            <ProductAdminTable products={items} />
        </main>
    );
};

export default Admin;
