import { Button, Card } from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency"
import { useShoppingCart } from "../context/ShoppingCartContext"

type StoreItemProps = {
   id: number
   title: string
   price: number
   urlImage: string
   description: string
}

export function StoreItem({id, title, price, urlImage, description}:StoreItemProps){
    const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart()
    const quantity = getItemQuantity(id)
    return(
        <Card className="h-100">
            <Card.Img variant="top" src={urlImage} height={"200px"} style={{objectFit:"cover"}}></Card.Img>
            <Card.Body className="d-flex flex-column bg-info-subtle">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fs-2">{title}</span>
                    <span className="ms-2 text-muted">{formatCurrency(price)}</span>
                </Card.Title>
                <div className="mt-auto" >
                    <div className="d-flex flex-column " >
                        <span className="ms-2">{description}</span><br/>     
                        {quantity === 0 ? (
                                <Button className="w-100" onClick={() => increaseCartQuantity(id)}>+ Agregar al carrito</Button>
                            ):(
                                
                                <div className="d-flex align-items-center flex-column" style={{gap:".5rem"}}>
                                    
                                    <div className="d-flex align-items-center justify-content-center" style={{gap:".5rem"}}> 
                                        <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                                            <div>
                                                <span className="fs-3">{quantity}</span> En el carrito
                                            </div>
                                        <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                                    </div>
                                    <Button className="bg-danger" size="sm" onClick={() => removeFromCart(id)}>Quitar del carrito</Button>
                                </div>
                            )
                        }
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}