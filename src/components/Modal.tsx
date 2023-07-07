import { motion, useAnimationControls, Variants } from "framer-motion";
import { useEffect } from "react";

type Props = { display: boolean, closeModal: () => void };

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

export default function Modal({ display, closeModal }: Props) {
    const modalBodyControls = useAnimationControls();

    useEffect(() => {
        if (display) {
            modalBodyControls.start({
                opacity: 1,
                width: "100%",
            });
        } else {
            modalBodyControls.start({
                opacity: 0,
                width: 0,
            });
        }
    }, [display]);

    return (
        <motion.div
            id="modal"
            className="modal h-screen w-screen absolute top-0 right-0 z-20 bg-black/95 text-white pt-36 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={modalBodyControls}
        >
            <motion.div
                className="h-full w-full flex flex-col items-center text-xl font-extrabold tracking-wide uppercase gap-24"
                variants={container}
                initial="hidden"
                animate="visible"
            >
                <motion.a href="/#about" variants={item} onClick={closeModal}>
                    Nosotros
                </motion.a>
                <motion.a href="/#why" variants={item} onClick={closeModal}>
                    Principios
                </motion.a>
                <motion.a href="#contact" variants={item} onClick={closeModal}>
                    Contacto
                </motion.a>
                <motion.a href="/catalogue" variants={item} onClick={closeModal}>
                    Catálogo
                </motion.a>
            </motion.div>
        </motion.div>
    );
}
