import React from 'react';
import { motion } from 'framer-motion';

const AboutDeji = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center p-4 lg:p-8 bg-base-100 rounded-xl shadow-lg">

            <motion.div
                className="space-y-5"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-4xl font-bold text-primary">About DEJI BATTERY</h1>
                <h2 className="text-xl font-semibold text-secondary">
                    Shenzhen Huidafa (DEJI) Technology Co., Ltd is engaged in R&D, production, and sales as a professional manufacturer.
                </h2>
                <p className="text-base leading-relaxed text-gray-700">
                    Shenzhen Huidafa Technology Co., Ltd. was founded in 2006 and has focused on producing mobile phone batteries and chargers for many years.
                    We operate two factories in Shenzhen and Dongguan, covering over 20,000 square meters. 
                    With advanced automatic machines for SMT PCB boards and battery assembly, we ensure high-quality production for iPhone and Android batteries.
                    Our core engineer, who is also the company’s founder, has over 20 years of experience in the battery industry. 
                    We can rapidly R&D new battery models monthly.
                    Our DEJI brand batteries are certified with CE, FCC, RoHS, PSE, KC, UN 38.3, MSDS, IEC62133, CB, TUV US, UKCA, and Anatel. 
                    We also hold ISO9001 Quality Management System certification.
                </p>
                <div>
                    <button className="btn btn-primary">Learn More About DEJI</button>
                </div>
            </motion.div>


            <div className="aspect-video w-full">
                <iframe
                    className="w-full h-full rounded-xl shadow-md"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default AboutDeji;
