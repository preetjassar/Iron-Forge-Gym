import pricingPlans from "../data/pricing";
import { FaCheck } from "react-icons/fa";
const Pricing = () => {
    return (
        <section className="bg-black text-white p-6">
            <div className="p-12">

                <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
                    Plans For Every Goal
                </h1>

                <p className="text-center text-gray-400 mb-12">
                    Choose the membership plan that fits your fitness journey.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {pricingPlans.map((plan) => (
                        <div
                            key={plan.id}
                            className="bg-gray-900 border border-gray-700 rounded-3xl p-8 hover:border-orange-500 hover:scale-105 duration-300"
                        >
                            <h2 className="text-2xl font-bold mb-2">
                                {plan.name}
                            </h2>

                            <p className="text-gray-400 mb-6">
                                {plan.subtitle}
                            </p>

                            <h3 className="text-5xl font-bold mb-6">
                                ${plan.price}
                                <span className="text-lg text-gray-400 font-normal">
                                    {plan.duration}
                                </span>
                            </h3>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <FaCheck className="text-orange-500" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className="w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-full font-semibold transition cursor-pointer">
                                {plan.button}
                            </button>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Pricing;