export const calidades = ["todo", "crepe", "crepe liga", "crepe negro"] as const;
export const colores = ["todo", "ambar", "oscura", "rojiza", "blanco", "cafe", "negro"] as const;
export const grabados = ["todo", "crepe", "zig zag"] as const;
export const fierrajes = ["todo", 5, 6, 9, 12] as const;

type Calidades = typeof calidades[number];
type Colores = typeof colores[number];
type Grabados = typeof grabados[number];
type Fierrajes = typeof fierrajes[number];

export type Producto = {
    calidad: Calidades,
    nombre: string,
    colores: Colores[],
    grabado: Grabados,
    fierrajes: Fierrajes[], 
    img: string,
};

export type Filtro = {
    calidad: Calidades,
    color: Colores,
    grabado: Grabados,
};

const productos: Producto[] = [
    {
        calidad: "crepe liga",
        nombre: "crepe-liga grabado crepe",
        colores: ["ambar", "oscura", "rojiza"],
        grabado: "crepe",
        fierrajes: [5, 6, 9, 12],
        img: "/productos/CLA0CR.JPG",
    },
    {
        calidad: "crepe",
        nombre: "crepe ambar grabado crepe",
        colores: ["ambar", "negro", "blanco"],
        grabado: "crepe",
        fierrajes: [5, 6, 9, 12],
        img: "/productos/CRA0CR.JPG",
    },
    {
        calidad: "crepe",
        nombre: "crepe ambar grabado zig-zag",
        colores: ["ambar", "negro", "blanco"],
        grabado: "zig zag",
        fierrajes: [5, 6, 9, 12],
        img: "/productos/CRA0ZG.JPG",
    },
    {
        calidad: "crepe negro",
        nombre: "crepe negro grabado crepe",
        colores: [],
        grabado: "crepe",
        fierrajes: [5, 6, 9, 12],
        img: "/productos/CRN0CR.JPG"
    },
    {
        calidad: "crepe negro",
        nombre: "crepe negro grabado zig-zag",
        colores: [],
        grabado: "zig zag",
        fierrajes: [5, 6, 9, 12],
        img: "/productos/CRN0ZG.JPG"
    },
];

export function filtrarProductos(filtro: Filtro): Producto[] {
    return productos
        .filter(prod => (prod.calidad === filtro.calidad || filtro.calidad === "todo"))
        .filter(prod => (prod.grabado === filtro.grabado || filtro.grabado === "todo"))
        .filter(prod => (filtro.color === "todo" || prod.colores.includes(filtro.color)));    
}

export const color_conversion = {
    ambar: "#FFBF00",
	oscura: "#5A5A5A",
	rojiza: "#FF0000",
	blanco: "#FFFFFF",
	cafe: "#A52A2A",
	negro: "#000000",
    todo: ""
};

const filtros = {
    calidad: calidades,
    color: colores,
    grabado: grabados,
    fierraje: fierrajes,
}

export type Filtros = typeof filtros[keyof Filtro];