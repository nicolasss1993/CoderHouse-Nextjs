"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import AmountSelect from '@/components/products/AmountSelect';
import { storage } from '@/utils/firebase';
import { ref, getDownloadURL } from 'firebase/storage';

const ProductDetail = ({ slug }) => {
    const [item, setItem] = useState(null);
    console.log("ProductDetail ", slug)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `${process.env.VERCEL_URL}/api/productos/detail/${slug}`;
                const response = await fetch(url, { cache: 'no-store' });
                const itemData = await response.json();

                const imageUrl = await getDownloadURL(ref(storage, `products/${slug}.webp`));

                setItem({
                    ...itemData,
                    imageUrl,
                });
            } catch (error) {
                console.error('Error fetching data:', error);
                setItem(null);
            }
        };

        fetchData();
    }, [slug]);

    if (!item) {
        console.log("sss");
        return null;
    }

    return (
        <div className="max-w-4xl m-auto">
            <section className="flex gap-6">
                <div className="relative basis-1/2">
                    <Image src={item.imageUrl} alt={item.title} width={860} height={860} />
                </div>
                <div className="basis-1/2">
                    <h2 className="text-2xl font-semibold border-b border-gray-200 pb-4 mb-4">{item.title}</h2>
                    <p className="text-4xl">$ {item.price}</p>
                    <AmountSelect item={item} />
                </div>
            </section>
            <section className="mt-12">
                <h3 className="text-xl font-semibold border-b border-gray-200 pb-4 my-4">Descripcion</h3>
                <p className="text-gray-600">{item.description}</p>
            </section>
        </div>
    );
};

export default ProductDetail;
