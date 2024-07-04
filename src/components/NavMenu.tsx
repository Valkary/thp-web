import { motion, Variants } from "framer-motion";

type Props = {};

const item: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
}

const container: Variants = {
    hidden: { opacity: 0, scale: 0, y: "100%" },
    visible: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 260,
            damping: 20,
            delayChildren: 0.3,
            staggerChildren: 0.4
        }
    }
}

export default function NavMenu({ }: Props) {
    return (
        <motion.div
            className="w-2/3 flex items-center justify-around text-thp-accent text-lg font-extrabold tracking-wide uppercase"
            variants={container}
            initial="hidden"
            animate="visible"
        >
            <motion.a className="hidden lg:block" href="/#hero" variants={item}>
                Inicio
            </motion.a>
            <motion.a className="hidden lg:block" href="/#about" variants={item}>
                Nosotros
            </motion.a>
            <motion.a className="hidden lg:block" href="/catalogue" variants={item}>
                Productos
            </motion.a>
            <motion.a className="hidden lg:block" href="/#contact" variants={item}>
                Contacto
            </motion.a>
        </motion.div>

    );
}
