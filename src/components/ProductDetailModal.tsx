/** @jsxImportSource solid-js */
import { useModalContext } from "@/context/ModalContext";
import { color_conversion, type Producto } from "@/utils/catalogue";
import { For, Show } from "solid-js";

export default function ProductDetailModal() {
    const { isOpen, hideModal, product } = useModalContext();

    return (
        <Show when={isOpen()}>
            <div class="fixed top-0 left-0 z-50 h-screen w-screen bg-black/80 flex justify-center items-center cursor-pointer" onClick={hideModal}>
                <div class="relative w-full md:w-1/2 lg:w-1/3 max-w-sm flex flex-col items-center rounded-lg bg-white shadow-md cursor-default" onClick={e => e.stopPropagation()}>

                    <div class="absolute top-[-4rem] mx-3 mt-3 flex h-56 aspect-square rounded-full overflow-hidden">
                        <img class="object-cover object-center w-full" src={product()?.img} alt="product image" />
                    </div>

                    <div class="mt-[12rem] px-5 pb-5 flex flex-col gap-5">
                        <h4 class="text-center text-3xl font-black text-thp-primary uppercase tracking-tight">{product()?.nombre}</h4>
                        <p class="text-md text-center text-thp-accent">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, unde?
                        </p>

                        <h5 class="text-xl font-black text-left text-thp-black uppercase">
                            Fierraje
                        </h5>
                        <div class="flex items-center text-lg">
                            <For each={product()?.fierrajes}>
                                {fierraje => (
                                    <div class="flex flex-row items-baseline">
                                        <span class="h-6 w-12 mx-1 rounded-xl bg-transparent text-black border-black border-2 flex justify-center items-center">
                                            {fierraje}
                                        </span>
                                    </div>
                                )}
                            </For>
                        </div>

                        <h5 class="text-xl font-black text-left text-thp-black uppercase">
                            Colores
                        </h5>
                        <div class="flex items-center text-lg">
                            <For each={product()?.colores}>
                                {color => (
                                    <div
                                        class="h-6 w-12 mx-1 rounded-xl border-2 border-black"
                                        style={{ "background-color": color_conversion[color] }}
                                    />
                                )}
                            </For>
                        </div>

                        <div class="w-full flex justify-center">
                            <button
                                class="flex items-center justify-center rounded-md bg-thp-primary px-5 py-2.5 w-1/2 text-center text-sm font-medium text-thp-white uppercase hover:bg-thp-accent focus:outline-none focus:ring-4 focus:ring-thp-accent"
                                onClick={hideModal}
                            >
                                Comprar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Show>
    );
}
