/** @jsxImportSource solid-js */
import { batch, For, createSignal } from "solid-js";
import { Filtro, Producto, filtrarProductos } from "../utils/catalogue";
import Filtros from "./Filtros";
import ProductoComp from "./Producto";

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

    return <section class="w-full h-full max-w-7xl mt-12 flex flex-col items-center">
        <h2 class="text-2xl tracking-[20px] mb-12">CATÁLOGO</h2>
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
    </section>
}