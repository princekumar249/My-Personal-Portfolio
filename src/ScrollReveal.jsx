import { motion } from "framer-motion";

const ScrollReveal = ({ children, delay = 0.3 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 2.5,
                delay,
                ease: [0.25, 0.1, 0.25, 1], // smooth cubic-bezier
            }}
            viewport={{ once: false, amount: 0.2 }}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;