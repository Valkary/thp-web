/** @jsxImportSource solid-js */
import type { Producto } from "@/utils/catalogue";
import { Accessor, JSXElement, createContext, createEffect, createSignal, useContext } from "solid-js";

type ModalContextType = {
    showModal: (product: Producto) => () => void,
    hideModal: () => void,
    isOpen: Accessor<boolean>,
    product: Accessor<Producto | null>
};

const [product, setProduct] = createSignal<Producto | null>(null);
const [open, setOpen] = createSignal(false);

function showModal(product: Producto) {
    return () => {
        setProduct(product);
        setOpen(true);
    }
}

function hideModal() {
    setProduct(null);
    setOpen(false);
}

const ModalContext = createContext<ModalContextType>({
    showModal,
    hideModal,
    product,
    isOpen: open
});

export function ModalContextProvider(props: { children: JSXElement }) {


    return <ModalContext.Provider
        value={{
            showModal,
            hideModal,
            product,
            isOpen: open
        }}
    >
        {props.children}
    </ModalContext.Provider>
}

export function useModalContext() {
    return useContext(ModalContext);
}