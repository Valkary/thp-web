/** @jsxImportSource solid-js */
import { useModalContext } from "@/context/ModalContext";
import type { Producto } from "../utils/catalogue";
import { For } from "solid-js";

type Props = {
    producto: Producto,
};

export default function Producto(props: Props) {
    const modalContext = useModalContext();

    return (
        <div class="flex w-full md:w-1/2 lg:w-full max-w-sm flex-col items-center overflow-hidden rounded-lg bg-thp-gray shadow-md">
            <div class="mx-3 mt-3 flex h-56 aspect-square rounded-full overflow-hidden">
                <img class="object-cover object-center w-full" src={props.producto.img} alt="product image" />
            </div>
            <div class="mt-4 px-5 pb-5 flex flex-col gap-5 items-center">
                <h5 class="text-center text-3xl font-black text-thp-primary uppercase tracking-tight">{props.producto.nombre}</h5>
                <h6 class="text-lg text-center text-thp-accent">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, unde?
                </h6>
                <button
                    class="flex items-center justify-center rounded-md bg-thp-primary px-5 py-2.5 w-1/2 text-center text-sm font-medium text-thp-white uppercase hover:bg-thp-accent focus:outline-none focus:ring-4 focus:ring-thp-accent"
                    onClick={modalContext?.showModal(props.producto)}
                >
                    Ver más
                </button>
            </div>
        </div>
    )
}