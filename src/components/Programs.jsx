import programs from "../data/Program";

const Programs = () => {
    return (
        <section className="bg-black text-white py-16 px-6">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
                    OUR PROGRAMS
                </h1>

                <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
                    Choose the perfect training program to achieve your fitness goals.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programs.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.id}
                                className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-orange-500 transition duration-300 hover:-translate-y-2"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-60 object-cover"
                                />

                                <div className="p-6">
                                    <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center text-2xl mb-4">
                                        <Icon />
                                    </div>

                                    <h3 className="text-2xl font-bold mb-3">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-400 mb-4">
                                        {item.description}
                                    </p>

                                    <p className="text-orange-400 font-semibold mb-6">
                                        {item.duration}
                                    </p>

                                    <button className="w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-lg font-semibold transition">
                                        JOIN NOW
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Programs;