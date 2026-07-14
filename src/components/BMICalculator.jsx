import { useState } from "react";
import { useForm } from "react-hook-form";

function Category(bmi) {
    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Healthy";
    if (bmi < 30) return "Overweight";
    return "Obese";
}

export default function BMICalculator() {
    const [bmi, setBmi] = useState("");
    const [category, setCategory] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        mode: "onChange",
    });

    const onSubmit = (data) => {
        const h = Number(data.height) / 100;
        const w = Number(data.weight);

        const result = w / (h * h);

        setBmi(result.toFixed(1));
        setCategory(Category(result));
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 px-6 py-20">
            <div className="w-full max-w-lg">

                <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-white">
                        BMI Calculator
                    </h2>

                    <p className="text-slate-400 mt-3">
                        Check your body mass index and understand your health category.
                    </p>
                </div>

                <div className="bg-gray-800  border border-gray-500 rounded-3xl p-8 shadow-2xl">

                    <form onSubmit={handleSubmit(onSubmit)} >

                        <div>
                            <label className="text-sm text-slate-300 mb-5">
                                Height (cm)
                            </label>

                            <input
                                type="number"
                                placeholder="175"
                                {...register("height", {
                                    required: "Height is required",
                                    min: {
                                        value: 1,
                                        message: "Height must be greater than 0",
                                    },
                                })}
                                className="mt-2 w-full rounded-xl bg-gray-800 border border-gray-500 px-4 py-3 text-white placeholder:text-gray-500 outline-none "
                            />

                            {errors.height && (
                                <p className="text-red-400 text-sm mt-1">
                                    {errors.height.message}
                                </p>
                            )}
                        </div>

                        {/* Weight */}
                        <div>
                            <label className="text-sm text-slate-300 mb-5">
                                Weight (kg)
                            </label>

                            <input
                                type="number"
                                placeholder="70"
                                {...register("weight", {
                                    required: "Weight is required",
                                    min: {
                                        value: 1,
                                        message: "Weight must be greater than 0",
                                    },
                                })}
                                className="mt-2 w-full rounded-xl bg-gray-800 border border-gray-500 px-4 py-3 text-white placeholder:text-gray-500 outline-none"
                            />

                            {errors.weight && (
                                <p className="text-red-400 text-sm mt-1">
                                    {errors.weight.message}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full mt-8 rounded-xl bg-orange-500  text-white font-semibold  hover:bg-orange-600 h-15  transition duration-300 "
                        >
                            Calculate BMI
                        </button>

                    </form>

                    {bmi && (
                        <div className="mt-8 rounded-2xl bg-grey  p-6 text-center">
                            <p className="text-gray-400 text-sm">
                                Your BMI Score
                            </p>

                            <h3 className="text-6xl font-bold text-white mt-2">
                                {bmi}
                            </h3>

                            <div className="inline-block mt-4 px-5 py-2 rounded-full bg-orange-500 text-white font-medium">
                                {category}
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </section>
    );
}