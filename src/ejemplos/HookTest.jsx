import { useProductos } from "../Hook/useProductos"



const HookTest = () => {

    const {loading, productos} = useProductos()
    console.log(productos)

    return (
        <div>
            {
                loading ? "CARGANDO" : "CARGA LISTA"
            }
        </div>
    )
}

export default HookTest