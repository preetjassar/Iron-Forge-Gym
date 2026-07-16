import trainersId from "../data/Trainers";
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";

const Trainers = () => {
    return (
        <section className="bg-black text-white py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
                    OUR TRAINERS
                </h1>

                <p className="text-center text-gray-400 mb-14 max-w-2xl mx-auto">
                    Certified coaches who plan every session around your goals, not a
                    generic script.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {trainersId.map((trainer) => (
                        <div
                            key={trainer.id}
                            className="bg-gray-900 border border-gray-700 rounded-3xl p-8 text-center hover:border-orange-500 hover:scale-105 transition-all duration-300"
                        >
                            <div className="w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden border-2 border-orange-500">
                                <img
                                    src={trainer.image}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h2 className="text-2xl font-bold mb-2">
                                {trainer.name}
                            </h2>

                            <p className="text-orange-500 font-medium mb-2">
                                {trainer.skills}
                            </p>

                            <p className="text-gray-400 mb-6">
                                {trainer.experience}
                            </p>

                            <div className="flex justify-center gap-3">
                                <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition cursor-pointer">
                                    <FaInstagram />
                                </div>

                                <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition cursor-pointer">
                                    <FaTwitter />
                                </div>

                                <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition cursor-pointer">
                                    <FaFacebook />
                                </div>

                                <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition cursor-pointer">
                                    <FaYoutube />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Trainers;