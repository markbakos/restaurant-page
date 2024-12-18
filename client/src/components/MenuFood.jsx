import {useState} from "react";
import { ShoppingCart } from "lucide-react"

const MenuFood = ({itemName, itemDescription , img, price}) => {
    const [isHovered, setIsHovered] = useState(false)

    const addToCart = () => {
        const cart = JSON.parse(localStorage.getItem("cart")) || []
        const itemIndex = cart.findIndex(item => item.name === itemName)

        if (itemIndex === -1) {
            cart.push({ name: itemName, price: price, quantity: 1 })
        } else {
            cart[itemIndex].quantity++
        }

        localStorage.setItem("cart", JSON.stringify(cart))
        console.log(localStorage.getItem("cart"))
    }

    return (
        <div
            className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative">
                <img
                    src={img}
                    alt={itemName}
                    className="w-full h-48 object-cover transition-transform duration-300"
                    style={{transform: isHovered ? 'scale(1.05)' : 'scale(1)'}}
                />
                <span
                    className="absolute top-2 right-2 bg-amber-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
          ${price}
        </span>
            </div>
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{itemName}</h3>
                <p className="text-gray-600 text-sm mb-4">{itemDescription}</p>
                <button
                    onClick={addToCart}
                    className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-md transition-colors duration-200 flex items-center justify-center"
                >
                    <ShoppingCart className="mr-2 h-4 w-4"/> Add to cart
                </button>
            </div>
        </div>
    )
}

export default MenuFood