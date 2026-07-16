import HeroImage from "../assets/Hero.webp";

const Hero = () => {
    return (
        <section className="bg-black text-white flex items-center mt-6">
            <div className=" mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">

                <div>
                    <p className="text-orange-500  font-semibold mb-4">
                        IRON  FORGE  GYM
                    </p>

                    <h1 className="text-5xl md:text-7xl font-extrabold ">
                        FORGE
                        <br />
                        STRENGTH.
                        <br />
                        BUILD
                        <br />
                        GREATNESS.
                    </h1>

                    <p className="text-gray-400 text-lg  mt-6 max-w-lg">
                        Welcome to Iron Forge Gym, where dedication meets results.
                        Train with experienced coaches, world-class equipment, and
                        personalized fitness programs designed to help you build
                        strength, lose fat, improve endurance, and unlock your true
                        potential.
                    </p>

                    <div className="flex  gap-4 mt-8">
                        <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-full font-semibold transition">
                            Join Now
                        </button>

                        <button className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-full transition">
                            Explore Programs
                        </button>
                    </div>
                </div>
                <div className="flex justify-center">
                    <img
                        src={HeroImage}
                        alt="Iron Forge Gym"
                        className="w-[420px] h-[550px] object-cover rounded-3xl border border-orange-500"
                    />
                </div>

            </div>
        </section>
    );
};

export default Hero;