/** @jsxImportSource solid-js */
import { For } from "solid-js";
import type { Filtro, Filtros } from "../utils/catalogue";

type Props = {
    title: string,
    key_filtro: keyof Filtro,
    options: Filtros,
    valor_filtro: Filtro[keyof Filtro],
    handleClick: (key: keyof Filtro, val: Filtro[keyof Filtro]) => void,
    handleSelectedDropdown: (key: keyof Filtro | null, isOpen: boolean) => void,
    isOpen: () => boolean,
};

export default function Dropdown(props: Props) {
    return (
        <div class="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 uppercase tracking-widest"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onclick={() => props.handleSelectedDropdown(props.key_filtro, props.isOpen())}
                >
                    {props.valor_filtro !==  "todo" ? props.valor_filtro : props.title}
                    <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>

            <div
                class={`
                    ${props.isOpen() ? "block" : "hidden"} ${props.key_filtro === "calidad" ? "left-0" : "right-0"}
                    absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none uppercase
                `}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabindex="-1"
            >
                <For each={props.options}>
                    {(opt, id) => {
                        const isSelected = () => opt === props.valor_filtro;
                        return (
                            <div class="py-1 w-full h-full" role="none">
                                <div
                                    class={`
                                        block px-4 py-2 text-sm h-full w-full hover:bg-gray-300 cursor-pointer
                                        ${isSelected() ? "bg-gray-100 text-gray-900" : "text-gray-700"}
                                    `}
                                    role="menuitem"
                                    tabindex="-1"
                                    id={`menu-item-${id()}`}
                                    onclick={() => {
                                        props.handleSelectedDropdown(null, props.isOpen());
                                        props.handleClick(props.key_filtro, opt);
                                    }}
                                >
                                    {opt}
                                </div>
                            </div>
                        );
                    }}
                </For>
            </div>
        </div>
    );
}