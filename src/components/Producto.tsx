/** @jsxImportSource solid-js */
import { color_conversion, type Producto } from "../utils/catalogue"
import { For } from "solid-js";

type Props = {
    producto: Producto,
};

export default function Producto(props: Props) {
    return (
        <div class="relative flex w-full md:w-1/2 lg:w-full max-w-sm flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
            <a class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                <img class="object-cover w-full" src={props.producto.img} alt="product image" />
            </a>
            <div class="mt-4 px-5 pb-5">
                <a href="#">
                    <h5 class="text-xl tracking-tight text-slate-900 uppercase">{props.producto.nombre}</h5>
                </a>
                <div class="mt-2 mb-5 flex flex-col justify-between">
                    <div class="flex items-center text-lg">
                        <span class="font-bold text-slate-900">Fierrajes:</span>
                        <For each={props.producto.fierrajes}>{
                            (fierraje, id) => {
                                return (
                                    <div class="flex flex-row items-baseline">
                                        <span class="h-6 w-6 mx-1 rounded-md bg-black text-white flex justify-center items-center">{fierraje}</span>
                                        {id() + 1 < props.producto.fierrajes.length && <span>,</span>}
                                    </div>
                                );
                            }
                        }</For>
                    </div>
                    <div class="flex items-center text-lg">
                        {props.producto.colores.length > 0 && <span class="font-bold text-slate-900">Colores:</span>}
                        <For each={props.producto.colores}>{
                            (color) => {
                                return <div class="h-6 w-6 mx-1 rounded-md border-2 border-black" style={{ "background-color": color_conversion[color] }} />
                            }
                        }</For>
                    </div>
                </div>
                <button 
                disabled
                class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 w-full text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 cursor-not-allowed">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Proximamente!
                </button>
            </div>
        </div>
    )
}