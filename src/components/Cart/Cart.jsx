import PropTypes from 'prop-types'

const Cart = ({addCart, removeFromCart}) => {
    return (
        <div>
            <h1 className="cart">Cart: {addCart.length} </h1>
            <div className="cart-items">
                {
                    addCart.map((bottle, index) => <div key={index}>
                        <img src={bottle.img} alt='Bottle picture' />
                        <button onClick={()=>removeFromCart(bottle.id)}>Remove</button>
                    </div>)
                }
            </div>
        </div>
    );
};

Cart.propTypes = {
    addCart: PropTypes.array.isRequired,
    removeFromCart: PropTypes.func.isRequired
}
export default Cart;