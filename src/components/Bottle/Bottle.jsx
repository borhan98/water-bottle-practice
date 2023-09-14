
import PropTypes from 'prop-types'

const Bottle = ({bottle, addToCart}) => {
    const {name, img} = bottle;
    return (
        <div>
            <h4>Bottle: {name.length > 15 ? `${name.slice(0, 15)}...`: name} </h4>
            <img className='img' src={img} />
            <button onClick={()=>addToCart(bottle)} className='add-btn'>Add To Cart</button>
        </div>
    );
};


Bottle.propTypes = {
    bottle: PropTypes.object.isRequired,
    addToCart: PropTypes.func.isRequired
}
export default Bottle;