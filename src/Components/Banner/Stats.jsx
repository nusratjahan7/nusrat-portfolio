"use client"
import { motion } from 'framer-motion';

const Stats = () => {
    return (
        <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                viewport={{ once: true, amount: 0.5  }}
                className="hero-stats flex md:hidden">
                <div className="stat-card">
                    <div className="stat-number">10+</div>
                    <div className="stat-label">Projects Built</div>
                </div>
                <div className="stat-card">
                    <div className="stat-number">10+</div>
                    <div className="stat-label">Tools Learned</div>
                </div>
                <div className="stat-card">
                    <div className="stat-number">∞</div>
                    <div className="stat-label">Curiosity</div>
                </div>
            </motion.div>
    );
};

export default Stats;