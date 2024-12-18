import img from "/menubg.jpg";
import MenuFood from "../components/MenuFood.jsx";
import {Link} from "react-router-dom";
import {useState} from "react";
import { ShoppingCart } from 'lucide-react';
import Layout from "../components/Layout.jsx"

import cheeseburger from "/food/cheeseburger.jpg"
import avocado from "/food/avocado.jpg"
import burrito from "/food/burrito.jpg"
import caesar from "/food/caesar.jpg"
import familyfeast from "/food/familyfeast.jpg"
import grilledchicken from "/food/grilledchicken.jpg"
import lasagna from "/food/lasagna.jpg"
import lunchcombo from "/food/lunchcombo.jpg"
import pancakes from "/food/pancakes.jpg"
import salmon from "/food/salmon.jpg"
import spaghetti from "/food/spaghetti.jpg"
import steak from "/food/steak.jpg"
import caprese from "/food/caprese.jpg"
import cheesesteak from "/food/cheesesteak.jpg"
import chicken from "/food/chicken.jpg"
import fettucine from "/food/fettucine.jpg"
import penne from "/food/penne.jpg"
import ribeye from "/food/ribeye.jpg"
import seafood from "/food/seafood.jpg"
import turkey from "/food/turkey.jpg"
import vegetable from "/food/vegetable.jpg"
import veggieburger from "/food/veggieburger.jpg"
import bacon from "/food/bacon.jpg"


const Menu = () => {
    const [activeSection, setActiveSection] = useState('deals');

    const menuSections = [
        { id: 'deals', title: 'Deals' },
        { id: 'breakfast', title: 'Breakfast' },
        { id: 'lunch', title: 'Lunch' },
        { id: 'burgers', title: 'Burgers' },
        { id: 'sandwiches', title: 'Sandwiches' },
        { id: 'pastas', title: 'Pastas' },
        { id: 'grill', title: 'Grill' },
    ]

    const menuItems = {
        deals: [
            { name: "Family Feast", description: "Including 4 Burgers, 4 Fries, 4 Beverages, and 4 Desserts", img: familyfeast, price: "29.99" },
            { name: "Lunch Combo", description: "Choose a burger, a side of fries, and a drink.", img: lunchcombo, price: "9.99" },
        ],
        breakfast: [
            { name: "American Pancakes", description: "5 Fluffy pancakes with maple syrup and butter", img: pancakes, price: "6.99" },
            { name: "Breakfast Burrito", description: "Scrambled eggs, sausage, cheese and hash browns wrapped in a soft tortilla.", img: burrito, price: "8.49" },
            { name: "Avocado Toast", description: "Toasted sourdough topped with avocado, cherry tomatoes, and a dash of chili flakes.", img: avocado, price: "7.49" },
        ],
        lunch: [
            { name: "Grilled Chicken Sandwich", description: "Marinated grilled chicken with lettuce, tomato, and mayo on a brioche bun.", img: grilledchicken, price: "10.49" },
            { name: "Caesar Salad", description: "Fresh romaine, croutons, Parmesan, and Caesar dressing.", img: caesar, price: "12.99" },
            { name: "Spaghetti Bolognese", description: "Pasta served with rich beef and tomato sauce topped with Parmesan.", img: spaghetti, price: "12.99" },
            { name: "Steak & Fries", description: "Juicy grilled steak with herb butter, served with a side of crispy fries.", img: steak, price: "19.99" },
            { name: "Grilled Salmon", description: "Fresh salmon fillet served with steamed vegetables and lemon butter sauce.", img: salmon, price: "17.99" },
            { name: "Vegetarian Lasagna", description: "Layers of pasta, ricotta, spinach, and marinara sauce, baked to perfection.", img: lasagna, price: "14.99" },
        ],
        burgers: [
            { name: "Classic Cheeseburger", description: "100% beef patty, cheddar cheese, lettuce, tomato, onion, and pickles on a toasted bun.", img: cheeseburger, price: "9.99" },
            { name: "BBQ Bacon Burger", description: "Topped with crispy bacon, BBQ sauce, cheddar cheese, and onion rings.", img: bacon, price: "11.99" },
            { name: "Veggie Delight Burger", description: "Grilled plant-based patty, lettuce, tomato, avocado, and vegan mayo.", img: veggieburger, price: "10.49" },
        ],
        sandwiches: [
            { name: "Turkey Club Sandwich", description: "Sliced turkey, crispy bacon, lettuce, tomato, and mayo on toasted bread.", img: turkey, price: "9.99" },
            { name: "Philly Cheesesteak", description: "Tender beef, sautéed peppers, onions, and melted provolone on a hoagie roll.", img: cheesesteak, price: "11.49" },
            { name: "Caprese Sandwich", description: "Fresh mozzarella, tomato, basil, and balsamic glaze on ciabatta bread.", img: caprese, price: "8.99" },
        ],
        pastas: [
            { name: "Fettuccine Alfredo", description: "Creamy Alfredo sauce over fettuccine noodles, topped with Parmesan.", img: fettucine, price: "13.99" },
            { name: "Penne Arrabbiata", description: "Penne pasta tossed in a spicy tomato sauce, finished with fresh basil.", img: penne, price: "12.49" },
            { name: "Seafood Linguine", description: "Linguine with shrimp, scallops, and mussels in a garlic white wine sauce.", img: seafood, price: "16.99" },
        ],
        grill: [
            { name: "Grilled Ribeye Steak", description: "A 12 oz ribeye grilled to your liking, served with mashed potatoes and asparagus.", img: ribeye, price: "22.99" },
            { name: "BBQ Chicken Platter", description: "Half a chicken glazed with smoky BBQ sauce, served with coleslaw and cornbread.", img: chicken, price: "14.99" },
            { name: "Grilled Vegetable Skewers", description: "Zucchini, bell peppers, mushrooms, and onions marinated and grilled to perfection.", img: vegetable, price: "10.99" },
        ],
    }

    return (
        <Layout title="MENU" backgroundImage={img}>
            <div className="container mx-auto px-4">
                <Link to="/cart" className="fixed top-3.5 sm:top-8 right-4 sm:right-8 z-30 bg-amber-700 text-white p-2 rounded-full shadow-lg">
                    <ShoppingCart size={24} />
                </Link>

                <nav className="mb-8">
                    <ul className="flex flex-wrap justify-center gap-4">
                        {menuSections.map((section) => (
                            <li key={section.id}>
                                <button
                                    onClick={() => setActiveSection(section.id)}
                                    className={`px-4 py-2 rounded-full ${
                                        activeSection === section.id
                                            ? 'bg-amber-700 text-white'
                                            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                                    } transition-colors duration-200`}
                                >
                                    {section.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="grid md:grid-cols-2 gap-8">
                    {menuItems[activeSection].map((item, index) => (
                        <MenuFood
                            key={index}
                            itemName={item.name}
                            itemDescription={item.description}
                            img={item.img}
                            price={item.price}
                        />
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export default Menu
