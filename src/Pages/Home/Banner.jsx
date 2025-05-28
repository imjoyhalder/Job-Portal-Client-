import { motion } from "framer-motion"; // Changed to framer-motion for reliability
import team1 from '../../assets/Team/Team1.jpg';
import team2 from '../../assets/Team/Team2.jpg';

const Banner = () => {
    return (
        <div className="bg-base-200 py-16 px-6 rounded-2xl md:px-20">
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">

                {/* Left Side Text */}
                <div className="flex-1 space-y-6 text-center lg:text-left">
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold leading-tight"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2 }}
                    >
                        Latest <motion.span
                            animate={{ color: ['#FF0080', '#7928CA', '#2AFADF'] }}
                            transition={{ duration: 3, repeat: Infinity, repeatType: 'mirror' }}
                            className="inline-block"
                        >
                            Jobs
                        </motion.span> For You!
                    </motion.h1>
                    <p className="text-gray-600 text-sm md:text-base max-w-md mx-auto lg:mx-0">
                        Discover your dream job today! Trusted by companies and candidates across industries. We help you build your future with confidence.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn btn-primary"
                    >
                        Get Started
                    </motion.button>
                </div>

                {/* Right Side Images */}
                <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-6 relative">
                    <motion.img
                        src={team1}
                        className="w-56 md:w-64 border-l-4 border-b-4 border-blue-600 rounded-t-[40px] rounded-br-[40px] shadow-2xl"
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.img
                        src={team2}
                        className="w-56 md:w-64 border-l-4 border-b-4 border-purple-600 rounded-t-[40px] rounded-br-[40px] shadow-2xl"
                        animate={{ y: [0, 20, 0] }}
                        transition={{ duration: 5, delay: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>

            </div>
        </div>
    );
};

export default Banner;
