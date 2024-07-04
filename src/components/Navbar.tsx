import { motion } from "framer-motion";
import HamburgerMenu from "./HamburgerMenu";
import NavMenu from "./NavMenu";
type NavbarProps = {};

export default function Navbar({ }: NavbarProps) {
    return (
        <section id="navbar" className="w-full bg-thp-gray flex justify-center top-0 sticky z-50">
            <motion.div className="w-full flex flex-row items-center justify-center overflow-x-hidden px-4 md:px-20 xl:px-28">
                <nav className="px-4 lg:px=0 py-2 flex flex-row w-full">
                    <motion.div
                        className="flex items-center w-2/3"
                        initial={{ x: "-150%", }}
                        animate={{ x: 0 }}
                        transition={{
                            duration: 0.6
                        }}
                    >
                        <a href="/" className="flex items-center justify-center h-16 aspect-square rounded-full">
                            <img src="/thp_logo_nl.png" alt="THP Logo" />
                        </a>
                    </motion.div>

                    <NavMenu />
                    <HamburgerMenu />
                </nav>
            </motion.div>
        </section>
    )
}
