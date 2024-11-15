import Navbar from "../components/Navbar.jsx";
import img from "/menubg.jpg";
import MenuFood from "../components/MenuFood.jsx";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";

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

    const location = useLocation()

    useEffect(() => {
        const hash = location.hash;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);


    return (
        <>
            <Navbar/>
            <header className="w-screen h-[40vh] sm:h-[30vh] flex justify-center items-center">
                <img
                    className="h-[40vh] sm:h-[30vh] w-screen object-cover object-center opacity-70 absolute left-0 select-none"
                    src={img} alt="Title image for Menu Section"
                />
                <h1 className="text-center text-5xl z-10 font-semibold text-black select-none">MENU</h1>
            </header>
            <main className="flex flex-col items-center text-center text-xl mb-20">
                <header id="deals" className="my-6">
                    <h1 className="text-4xl font-semibold mt-3">Deals</h1>
                    <p className="text-2xl">Our current deals</p>
                </header>
                <section className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5">
                    <MenuFood
                        itemName="Family Feast"
                        itemDescription="Including 4 Burgers, 4 Fries, 4 Beverages, and 4 Desserts"
                        img={familyfeast}
                        price="$29.99"
                    />

                    <MenuFood
                        itemName="Lunch Combo"
                        itemDescription="Choose a burger, a side of fries, and a drink."
                        img={lunchcombo}
                        price="$9.99"
                    />
                </section>


                <header id="breakfast" className="my-6">
                    <h1 className="text-4xl font-semibold mt-3">Breakfast</h1>
                    <p className="text-2xl">Served until 11:00AM</p>
                </header>
                <section className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5">

                    <MenuFood
                        itemName="American Pancakes"
                        itemDescription="5 Fluffy pancakes with maple syrup and butter"
                        img={pancakes}
                        price="$6.99"
                    />

                    <MenuFood
                        itemName="Breakfast Burrito"
                        itemDescription="Scrambled eggs, sausage, cheese and hash browns wrapped in a soft tortilla."
                        img={burrito}
                        price="$8.49"
                    />

                    <MenuFood
                        itemName="Avocado Toast"
                        itemDescription="Toasted sourdough topped with avocado, cherry tomatoes, and a dash of chili flakes."
                        img={avocado}
                        price="$7.49"
                    />

                </section>

                <header id="lunch" className="my-6">
                    <h1 className="text-4xl font-semibold mt-3">Lunch</h1>
                    <p className="text-2xl">Served all day</p>
                </header>

                <section className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5">

                    <MenuFood
                        itemName="Grilled Chicken Sandwich"
                        itemDescription="Marinated grilled chicken with lettuce, tomato, and mayo on a brioche bun."
                        img={grilledchicken}
                        price="$10.49"
                    />

                    <MenuFood
                        itemName="Caesar Salad"
                        itemDescription="Fresh romaine, croutons, Parmesan, and Caesar dressing."
                        img={caesar}
                        price="$12.99"
                    />

                    <MenuFood
                        itemName="Spaghetti Bolognese"
                        itemDescription="Pasta served with rich beef and tomato sauce topped with Parmesan."
                        img={spaghetti}
                        price="$12.99"
                    />

                    <MenuFood
                        itemName="Steak & Fries"
                        itemDescription="Juicy grilled steak with herb butter, served with a side of crispy fries."
                        img={steak}
                        price="$19.99"
                    />

                    <MenuFood
                        itemName="Grilled Salmon"
                        itemDescription="Fresh salmon fillet served with steamed vegetables and lemon butter sauce."
                        img={salmon}
                        price="$17.99"
                    />

                    <MenuFood
                        itemName="Vegetarian Lasagna"
                        itemDescription="Layers of pasta, ricotta, spinach, and marinara sauce, baked to perfection."
                        img={lasagna}
                        price="$14.99"
                    />

                </section>

                <header id="burgers" className="my-6">
                    <h1 className="text-4xl font-semibold mt-3">Burgers</h1>
                    <p className="text-2xl">Juicy, handcrafted patties grilled to perfection and served with fresh
                        toppings.</p>
                </header>

                <section className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5">

                    <MenuFood
                        itemName="Classic Cheeseburger"
                        itemDescription="100% beef patty, cheddar cheese, lettuce, tomato, onion, and pickles on a toasted bun."
                        img={cheeseburger}
                        price="$9.99"
                    />

                    <MenuFood
                        itemName="BBQ Bacon Burger"
                        itemDescription="Topped with crispy bacon, BBQ sauce, cheddar cheese, and onion rings."
                        img={bacon}
                        price="$11.99"
                    />

                    <MenuFood
                        itemName="Veggie Delight Burger"
                        itemDescription="Grilled plant-based patty, lettuce, tomato, avocado, and vegan mayo."
                        img={veggieburger}
                        price="$10.49"
                    />

                </section>

                <header id="sandwiches" className="my-6">
                    <h1 className="text-4xl font-semibold mt-3">Sandwiches</h1>
                    <p className="text-2xl">Freshly made with high-quality ingredients, perfect for a quick bite.</p>
                </header>

                <section className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5">

                    <MenuFood
                        itemName="Turkey Club Sandwich"
                        itemDescription="Sliced turkey, crispy bacon, lettuce, tomato, and mayo on toasted bread."
                        img={turkey}
                        price="$9.99"
                    />

                    <MenuFood
                        itemName="Philly Cheesesteak"
                        itemDescription="Tender beef, sautéed peppers, onions, and melted provolone on a hoagie roll."
                        img={cheesesteak}
                        price="$11.49"
                    />

                    <MenuFood
                        itemName="Caprese Sandwich"
                        itemDescription="Fresh mozzarella, tomato, basil, and balsamic glaze on ciabatta bread."
                        img={caprese}
                        price="$8.99"
                    />

                </section>

                <header id="pastas" className="my-6">
                    <h1 className="text-4xl font-semibold mt-3">Pastas</h1>
                    <p className="text-2xl">Flavorful pasta dishes made with love and authentic recipes.</p>
                </header>

                <section className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5">

                    <MenuFood
                        itemName="Fettuccine Alfredo"
                        itemDescription="Creamy Alfredo sauce over fettuccine noodles, topped with Parmesan."
                        img={fettucine}
                        price="$13.99"
                    />

                    <MenuFood
                        itemName="Penne Arrabbiata"
                        itemDescription="Penne pasta tossed in a spicy tomato sauce, finished with fresh basil."
                        img={penne}
                        price="$12.49"
                    />

                    <MenuFood
                        itemName="Seafood Linguine"
                        itemDescription="Linguine with shrimp, scallops, and mussels in a garlic white wine sauce."
                        img={seafood}
                        price="$16.99"
                    />


                </section>

                <header id="grill" className="my-6">
                    <h1 className="text-4xl font-semibold mt-3">Grill</h1>
                    <p className="text-2xl">From the grill to your plate, enjoy perfectly seared meats and vegetables.</p>
                </header>

                <section className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5">

                    <MenuFood
                        itemName="Grilled Ribeye Steak"
                        itemDescription="A 12 oz ribeye grilled to your liking, served with mashed potatoes and asparagus."
                        img={ribeye}
                        price="$22.99"
                    />

                    <MenuFood
                        itemName="BBQ Chicken Platter"
                        itemDescription="Half a chicken glazed with smoky BBQ sauce, served with coleslaw and cornbread."
                        img={chicken}
                        price="$14.99"
                    />

                    <MenuFood
                        itemName="Grilled Vegetable Skewers"
                        itemDescription="Zucchini, bell peppers, mushrooms, and onions marinated and grilled to perfection."
                        img={vegetable}
                        price="$10.99"
                    />

                </section>
            </main>
        </>
    )
}

export default Menu