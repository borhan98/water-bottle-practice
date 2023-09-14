
import { useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import Cart from '../Cart/Cart';
import '../Main.css'
import {getStoredCart, addItemToLocalStorage, removeFromLocalStorage} from '../localStorage'

const AllBottle = () => {
    const [allBottles, setAllBottles] = useState([]);
    const [addCart, setAddCart] = useState([]);

    useEffect(() => {
        fetch(`./water-bottle.json`)
        .then(res => res.json())
        .then(allBottles => setAllBottles(allBottles))
    }, [])

    useEffect(()=>{
        if (allBottles.length) {
            const storedCart = getStoredCart();
            const cartBottle = [];
            storedCart.forEach((bottleID)=> {
                const matchedBottle = allBottles.find((bottle) => bottle.id === bottleID);
                cartBottle.push(matchedBottle);
            })
            setAddCart(cartBottle);
        }
    },[allBottles])

    const addToCart = bottle => {
        setAddCart([...addCart, bottle])
        addItemToLocalStorage(bottle.id)
    }

    const removeFromCart = id => {
        removeFromLocalStorage(id);
        const remainingBottle = addCart.filter(bottle => bottle.id !== id);
        setAddCart(remainingBottle);
    }

    return (
        <div className="main">
            <h1 className='headline'>Total Bottle: {allBottles.length} </h1>
            <div className='container'>
                <div className="bottles-container">
                    {
                        allBottles.map(bottle => <div className='bottle'  key={bottle.id}>
                            <Bottle 
                                bottle={bottle} 
                                addToCart={addToCart} />
                        </div>)
                    }
                </div>
                <div className="cart-container">
                    <Cart addCart={addCart} removeFromCart={removeFromCart} />
                </div>
            </div>
        </div>
    );
};

export default AllBottle;