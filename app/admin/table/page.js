import React from 'react';
import ProductAdminTable from '@/components/admin/AdminTable';
import Image from 'next/image';
import Link from 'next/link';

const Admin = async () => {
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
            <ProductAdminTable />
        </main>
    );
};

export default Admin;