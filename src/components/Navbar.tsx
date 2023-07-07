import { motion } from "framer-motion";
import HamburgerMenu from "./HamburgerMenu";
import NavMenu from "./NavMenu";
type NavbarProps = {};

export default function Navbar({ }: NavbarProps) {
    return (
        <section id="navbar" className="w-full bg-black flex justify-center top-0 sticky z-20">
            <motion.div className="w-full flex flex-row items-center justify-center overflow-hidden xl:px-28">
                <nav className="px-4 lg:px=0 py-8 flex flex-row w-full">
                    <motion.div
                        className="flex items-center w-2/3"
                        initial={{ x: "-150%", }}
                        animate={{ x: 0 }}
                        transition={{
                            duration: 0.6
                        }}
                    >
                        <a href="/">
                            <div
                                className="flex items-center justify-center w-16 h-16 rounded-full bg-white"
                            >
                                <img src="/thp_logo_nl.png" alt="THP Logo" />
                            </div>
                        </a>

                        <div className="px-5 text-white text-xl uppercase tracking-widest font-bold">
                            <p className="hidden md:block">
                                Transformadora de Hules y Plásticos
                            </p>
                            <p className="block md:hidden">
                                THP
                            </p>
                        </div>
                    </motion.div>

                    <NavMenu />
                    <HamburgerMenu />
                </nav>
            </motion.div>
        </section>
    )
}
