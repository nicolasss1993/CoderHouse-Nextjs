'use client'
import { useState } from 'react';
import { AboutUs } from '@/utils/constants';

const AboutUsComponent = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <main className="min-h-screen text-black p-8 flex flex-col items-center">
            <h1 className="text-4xl text-black my-8">Quienes Somos?</h1>
            <br />
            <br />
            <hr />
            {AboutUs.map((section, index) => (
                <div
                    key={index}
                    className="mb-8 bg-white p-4 rounded-lg max-w-md w-full transition duration-300 ease-in-out"
                >
                    <h2
                        className="cursor-pointer text-2xl font-bold mb-4"
                        onClick={() => handleToggle(index)}
                    >
                        {section.label}
                    </h2>
                    {activeIndex === index && <p className="text-center">{section.value}</p>}
                </div>
            ))}
        </main>
    );
};

export default AboutUsComponent;