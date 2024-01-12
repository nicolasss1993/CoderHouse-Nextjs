import Image from 'next/image';
import AmountSelect from '@/components/products/AmountSelect';
import { storage } from '@/utils/firebase';
import { ref, getDownloadURL } from 'firebase/storage';
import { getDetail } from '@/utils/constants';

const ProductDetail = async ({ slug }) => {
    const item = await getDetail(slug);
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
