import React from 'react';
import LoginForm from '@/components/login/LoginForm';

export const metadata = {
    title: 'Capellari - Admin',
    description: 'Pagina de log al panel de admin',
}

const LogAdmin = async () => {
    return (
        <main className="container mx-auto my-8">
            <LoginForm redirect="/admin/table" />
        </main>
    );
};

export default LogAdmin;
