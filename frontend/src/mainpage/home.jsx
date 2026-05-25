import Navbar from '../components/pages/Navbar'
import Footer from '../components/pages/Footer'
import Gettrips from '../components/pages/Gettrips'
import HeroSection from '../components/pages/Userpages/searchtrip'
import WhyChooseUs from '../components/pages/Userpages/whychoose'
import Reviews from '../components/pages/Userpages/Reviews'

import { motion } from "framer-motion"

export default function Home() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 1,
                ease: "easeOut"
            }}
        >
            <Navbar />
            <HeroSection />
            <WhyChooseUs />
            <Gettrips home={true} />
            <Reviews />
            <Footer />
        </motion.div>
    )
}