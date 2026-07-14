import BMICalculator from "../components/BMICalculator";
import BMRCalculator from "../components/BMRCalculator";

export default function Calculations() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 py-10 px-6">

            <h1 className="text-4xl font-bold text-center text-white mb-10">
                Health Calculations
            </h1>

            <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto items-center">

                <BMICalculator />

                <BMRCalculator />

            </div>

        </div>
    );
}