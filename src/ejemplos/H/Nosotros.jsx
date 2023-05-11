import { withProductsData } from "./withProductsData"

const Nosotros = ({productos, loading}) => {
    console.log(productos)

    return (
        <div>
            
            <hr/>
        </div>
    )
}

export default withProductsData(Nosotros)
