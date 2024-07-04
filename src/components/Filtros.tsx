/** @jsxImportSource solid-js */
import { For, createSignal } from "solid-js";
import { Filtro, calidades, colores, grabados } from '../utils/catalogue';
import Dropdown from "./Dropdown";

type Props = {
    filtros: Filtro,
    changeFilters: (x: Filtro) => void,
}

export default function Filtros(props: Props) {
    const [selectedFilter, setSelectedFilter] = createSignal<keyof Filtro | null>(null);

    const handleClick = (key: keyof Filtro, val: Filtro[keyof Filtro]) => {
        const new_filtro: Filtro = {
            ...props.filtros,
            [key]: val,
        };

        props.changeFilters(new_filtro);
    }

    const handleSelectedDropdown = (key: keyof Filtro | null, isOpen: boolean) => setSelectedFilter(isOpen ? null : key);

    return (
        <div class="flex flex-row w-full">
            <div class="flex lg:hidden w-full justify-around">
                <Dropdown
                    title="calidad"
                    options={calidades}
                    key_filtro="calidad"
                    valor_filtro={props.filtros.calidad}
                    handleClick={handleClick}
                    handleSelectedDropdown={handleSelectedDropdown}
                    isOpen={() => "calidad" === selectedFilter()}
                />

                <Dropdown
                    title="color"
                    options={colores}
                    key_filtro="color"
                    valor_filtro={props.filtros.color}
                    handleClick={handleClick}
                    handleSelectedDropdown={handleSelectedDropdown}
                    isOpen={() => "color" === selectedFilter()}
                />

                <Dropdown
                    title="grabado"
                    options={grabados}
                    key_filtro="grabado"
                    valor_filtro={props.filtros.grabado}
                    handleClick={handleClick}
                    handleSelectedDropdown={handleSelectedDropdown}
                    isOpen={() => "grabado" === selectedFilter()}
                />
            </div>

            <div class="hidden lg:flex w-full justify-between">
                <div class="w-1/3 flex flex-col items-center uppercase">
                    <div class="tracking-widest">
                        Calidad:
                    </div>
                    <div class="my-1">
                        <For each={calidades}>
                            {(calidad) => {
                                const isSelected = () => calidad === props.filtros.calidad;
                                return (
                                    <button
                                        class={`
                                            px-4 py-2 border-2 border-solid border-thp-accent rounded-lg mx-1 my-1 tracking-wide uppercase text-thp-white
                                            ${isSelected() ? "bg-thp-primary" : "bg-thp-black font-bold"}
                                        `}
                                        onClick={() => handleClick("calidad", calidad)}
                                    >
                                        {calidad}
                                    </button>
                                )
                            }}
                        </For>
                    </div>
                </div>

                <div class="w-1/3 flex flex-col items-center uppercase">
                    <div class="tracking-widest">
                        Color:
                    </div>
                    <div class="my-1">
                        <For each={colores}>
                            {(color) => {
                                const isSelected = () => color === props.filtros.color;

                                return (
                                    <button
                                        class={`
                                        px-4 py-2 border-2 border-solid border-thp-accent rounded-lg mx-1 my-1 tracking-wide uppercase text-thp-white
                                        ${isSelected() ? "bg-thp-primary" : "bg-thp-black font-bold"}
                                    `}
                                        onClick={() => handleClick("color", color)}
                                    >
                                        {color}
                                    </button>
                                )
                            }}
                        </For>
                    </div>
                </div>

                <div class="w-1/3  flex flex-col items-center uppercase">
                    <div class="tracking-widest">
                        Grabado:
                    </div>
                    <div class="my-1">
                        <For each={grabados}>
                            {(grabado) => {
                                const isSelected = () => grabado === props.filtros.grabado;

                                return (
                                    <button
                                        class={`
                                        px-4 py-2 border-2 border-solid border-thp-accent rounded-lg mx-1 my-1 tracking-wide uppercase text-thp-white
                                        ${isSelected() ? "bg-thp-primary" : "bg-thp-black font-bold"}
                                    `}
                                        onClick={() => handleClick("grabado", grabado)}
                                    >
                                        {grabado}
                                    </button>
                                )
                            }}
                        </For>
                    </div>
                </div>
            </div>
        </div>
    );
};