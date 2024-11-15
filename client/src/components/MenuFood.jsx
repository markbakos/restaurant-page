
const MenuFood = ({itemName, itemDescription , img, price}) => {
    return (
        <section className="flex sm:flex-row flex-col justify-between m-2 p-4 lg:w-[48rem] lg:h-72 md:w-[90vw] md:h-[16rem] sm:w-[90vw] sm:h-[40rem] bg-slate-300 rounded-md">
            <figure className="lg:w-1/2 md:w-full sm:w-full p-2 flex justify-center items-center">
                <img src={img} alt="Cheeseburger" className="lg:w-[24rem] lg:h-[16rem] object-cover object-center rounded-md"/>
            </figure>
            <figcaption className="lg:w-1/2 md:w-full sm:w-full p-2 flex justify-center items-center flex-col">
                <h1
                    className="text-2xl font-semibold">
                    {itemName} - {price}
                </h1>
                <p className="my-3">
                    {itemDescription}
                </p>
                <button className="w-32 h-10 border-black border-2 hover:bg-black hover:text-white transition">
                    Add to cart
                </button>
            </figcaption>

        </section>
    )
}

export default MenuFood