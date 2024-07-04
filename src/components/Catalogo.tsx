/** @jsxImportSource solid-js */
import { batch, For, createSignal } from "solid-js";
import { Filtro, Producto, filtrarProductos } from "../utils/catalogue";
import Filtros from "./Filtros";
import ProductoComp from "./Producto";
import { ModalContextProvider } from "@/context/ModalContext";
import ProductDetailModal from "./ProductDetailModal";

export default function Catalogo({ }) {
    const [filtros, setFiltros] = createSignal<Filtro>({ calidad: "todo", grabado: "todo", color: "todo" });
    const [productos, setProductos] = createSignal<Producto[]>([]);

    setProductos(filtrarProductos(filtros()));

    const changeFilters = (filtro: Filtro) => {
        batch(() => {
            setFiltros(filtro);
            setProductos(filtrarProductos(filtro));
        });
    }

    return <main class="w-full h-full flex flex-col items-center">
        <ModalContextProvider>
            <ProductDetailModal />
            <section
                id="hero"
                class="w-full h-[30vh] flex items-center justify-center lg:h-[65vh] relative"
            >
                <img src="/laminas.jpg" alt="planta" class="object-cover object-center w-full h-full" />
                <div class="absolute top-0 left-0 z-10 w-full h-full bg-black/80" />
                <div class="absolute z-20 left-0 top-0 flex flex-col justify-center text-thp-white text-center lg:text-justify w-full lg:w-[60%] h-full overflow-x-hidden">
                    <div class="lg:pl-[10%] flex flex-col items-center lg:items-start">
                        <h1 class="px-20 text-4xl lg:text-[3rem] xl:text-[4.5rem] leading-snug lg:px-0 font-black [text-shadow:_black_2px_2px;]">PRODUCTOS</h1>
                    </div>
                </div>
            </section>


            <div class="w-full h-full mt-12 flex flex-col items-center max-w-7xl">
                <Filtros filtros={filtros()} changeFilters={changeFilters} />

                <div
                    class="
                        w-full my-6 flex flex-row flex-wrap justify-center gap-y-2
                        lg:grid lg:grid-cols-3 lg:gap-y-4
                    "
                >
                    <For each={productos()} fallback={<div>No items</div>}>
                        {(producto) => <ProductoComp producto={producto} />}
                    </For>
                </div>
            </div>
        </ModalContextProvider>
    </main>
}