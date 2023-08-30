import { Button, Container, Nav, Navbar as NavbarBs} from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"

export function Navbar(){
    const {openCart,cartQuantity} = useShoppingCart()
    return (
        <NavbarBs className="bg-warning shadow-sm mb-3" sticky="top">
            <Container> 
                <Nav className="me-auto  fw-bold fs-5">
                   <Nav.Link to={"/Store"} as={NavLink}>Cafetería la mascota feliz</Nav.Link>
                </Nav>
                {
                cartQuantity > 0 && (
                    <Button onClick={openCart} style={{width: "4rem", height: "4rem", position:"relative"}} variant="outline-primary" className="rounded-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="cart"><path d="M21.5,15a3,3,0,0,0-1.9-2.78l1.87-7a1,1,0,0,0-.18-.87A1,1,0,0,0,20.5,4H6.8L6.47,2.74A1,1,0,0,0,5.5,2h-2V4H4.73l2.48,9.26a1,1,0,0,0,1,.74H18.5a1,1,0,0,1,0,2H5.5a1,1,0,0,0,0,2H6.68a3,3,0,1,0,5.64,0h2.36a3,3,0,1,0,5.82,1,2.94,2.94,0,0,0-.4-1.47A3,3,0,0,0,21.5,15Zm-3.91-3H9L7.34,6H19.2ZM9.5,20a1,1,0,1,1,1-1A1,1,0,0,1,9.5,20Zm8,0a1,1,0,1,1,1-1A1,1,0,0,1,17.5,20Z"></path></svg>
                        <div className="rounded-circle  bg-danger d-flex justify-content-center align-items-center" style={{color:"white", width:"1.5rem", position:"absolute", bottom:0,right:0, transform:"translate(25%,25%"}}>
                            {cartQuantity}
                        </div>
                    </Button>
                )} 
            </Container>        
        </NavbarBs>
    )
}