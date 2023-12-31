import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
import Modal from "./Modal";

type Props = {};

export default function HamburgerMenu({ }: Props) {
    const [isOpen, setIsOpen] = useState(false);

    const topBarControls = useAnimationControls();
    const middleBarControls = useAnimationControls();
    const bottomBarControls = useAnimationControls();

    const handleClick = () => setIsOpen(!isOpen);

    useEffect(() => {
        if (isOpen) {
            topBarControls.start({
                rotate: 45,
                y: "300%",
                scale: 0.8
            });
            middleBarControls.start({
                x: "200%",
                opacity: 0
            });
            bottomBarControls.start({
                rotate: -45,
                y: "-300%",
                scale: 0.8
            });
        } else {
            topBarControls.start({
                rotate: 0,
                y: 0,
                scale: 1
            });
            middleBarControls.start({
                x: 0,
                opacity: 1
            });
            bottomBarControls.start({
                rotate: 0,
                y: 0,
                scale: 1
            });
        }
    }, [isOpen]);

    return (
        <>
            <motion.button className="block lg:hidden px-5 z-30 overflow-hidden" onClick={handleClick} name="hamburguer-menu">
                <motion.div className="w-[40px] h-[4px] my-2 bg-white" animate={topBarControls} />
                <motion.div className="w-[40px] h-[4px] my-2 bg-white" animate={middleBarControls} />
                <motion.div className="w-[40px] h-[4px] my-2 bg-white" animate={bottomBarControls} />
            </motion.button>
            <Modal display={isOpen} closeModal={handleClick} />
        </>
    );
}
