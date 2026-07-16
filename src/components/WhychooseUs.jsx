import whyChoose from "../data/Whychooseus";

const WhyChoose = () => {
    return (
        <section className="bg-black text-white py-20">
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-5xl text-center font-bold mb-12">
                    Why Choose Iron Forge Gym
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {whyChoose.map((item) => {
                        const Icon = item.icon; // Store icon component

                        return (
                            <div
                                key={item.id}
                                className="bg-zinc-900 p-8 rounded-lg"
                            >
                                <Icon className="text-orange-500 text-3xl mb-5" />

                                <h3 className="text-2xl font-semibold mb-3">
                                    {item.title}
                                </h3>

                                <p className="text-gray-400">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default WhyChoose;