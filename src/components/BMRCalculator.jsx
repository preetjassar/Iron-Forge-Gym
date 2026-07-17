import { useState } from "react";
import { useForm } from "react-hook-form";

export default function BMRCalculator() {
    const [bmr, setBmr] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onChange",
    });

    const onSubmit = (data) => {
        const age = Number(data.age);
        const height = Number(data.height);
        const weight = Number(data.weight);

        let result;

        if (data.gender === "male") {
            result = 10 * weight + 6.25 * height - 5 * age + 5;
        } else {
            result = 10 * weight + 6.25 * height - 5 * age - 161;
        }

        setBmr(result.toFixed(1));
    };

    return (
        <section className="bg-gray-800 border border-gray-500 rounded-3xl p-8 shadow-2xl h-full min-h-[620px]">
            <div className="w-full max-w-lg">

                <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-white">
                        BMR Calculator
                    </h2>

                    <p className="text-slate-400 mt-3">
                        Calculate your Basal Metabolic Rate (BMR).
                    </p>
                </div>

                <div className="bg-gray-800 border border-gray-500 rounded-3xl p-8 shadow-2xl">

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="mb-5">
                            <label className="text-sm text-slate-300">
                                Gender
                            </label>

                            <select
                                {...register("gender", {
                                    required: "Gender is required",
                                })}
                                className="mt-2 w-full rounded-xl bg-gray-800 border border-gray-500 px-4 py-3 text-white outline-none"
                            >
                                <option value="male" className="text-black">
                                    Male
                                </option>

                                <option value="female" className="text-black">
                                    Female
                                </option>
                            </select>

                            <p className="text-red-400 text-sm h-[20px]">
                                {errors.gender && (
                                    errors.gender.message
                                )}
                            </p>
                        </div>


                        <div className="mb-5">
                            <label className="text-sm text-slate-300">
                                Age (Years)
                            </label>

                            <input
                                type="number"
                                placeholder="20"
                                {...register("age", {
                                    required: "Age is required",
                                    min: {
                                        value: 1,
                                        message: "Age must be greater than 0",
                                    },
                                })}
                                className="mt-2 w-full rounded-xl bg-gray-800 border border-gray-500 px-4 py-3 text-white placeholder:text-gray-500 outline-none"
                            />

                            <p className="text-red-400 text-sm h-[20px]">
                                {errors.age && (
                                    errors.age.message
                                )}
                            </p>
                        </div>


                        <div className="mb-5">
                            <label className="text-sm text-slate-300">
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
                                className="mt-2 w-full rounded-xl bg-gray-800 border border-gray-500 px-4 py-3 text-white placeholder:text-gray-500 outline-none"
                            />

                            <p className="text-red-400 text-sm h-[20px]">
                                {errors.height && (
                                    errors.height.message
                                )}
                            </p>
                        </div>


                        <div className="mb-5">
                            <label className="text-sm text-slate-300">
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
                            <p className="text-red-400 text-sm h-[20px]">
                                {errors.weight && (
                                    errors.weight.message
                                )}
                            </p>
                        </div>

                        <button
                            type="submit"
                            className="w-full mt-8 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600 h-15 transition duration-300"
                        >
                            Calculate BMR
                        </button>

                    </form>

                    {bmr && (
                        <div className="mt-8 rounded-2xl bg-grey p-6 text-center">

                            <p className="text-gray-400 text-sm">
                                Your BMR
                            </p>

                            <h3 className="text-6xl font-bold text-white mt-2">
                                {bmr}
                            </h3>

                            <div className="inline-block mt-4 px-5 py-2 rounded-full bg-orange-500 text-white font-medium">
                                kcal/day
                            </div>

                        </div>
                    )}

                </div>

            </div>
        </section>
    );
}