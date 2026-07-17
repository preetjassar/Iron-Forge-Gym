import { useForm } from "react-hook-form";

export default function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <section className="min-h-screen bg-[#090909] px-6 py-24 relative overflow-hidden">
            {/* Background Glow */}

            <div className="absolute w-[300px] h-[300px] bg-orange-500/10 blur-[120px] bottom-20 right-20" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Heading */}
                <div className="text-center mb-20">
                    <div className="flex justify-center items-center gap-3 mb-4">
                        <div className="h-[2px] w-10 bg-orange-500" />
                        <p className="uppercase tracking-[4px] text-orange-500 font-semibold">
                            Get In Touch
                        </p>
                    </div>

                    <h1
                        className="text-6xl md:text-8xl text-white"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                        CONTACT US
                    </h1>

                    <p className="text-gray-400 mt-5 text-lg">
                        Questions about programs, pricing, or a tour? We usually
                        reply within one business day.
                    </p>
                </div>

                {/* Main Grid */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* LEFT SIDE */}
                    <div className="space-y-6">
                        {/* Google Map */}
                        <div className="rounded-3xl overflow-hidden border border-white/10 h-[300px]">
                            <iframe
                                title="Google Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.516591887167!2d75.957351574302!3d31.482481449015342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391ae5cf1ad54d4d%3A0x2be858235a692c53!2sRayat%20Bahra%20Professional%20University!5e0!3m2!1sen!2sin!4v1784187001218!5m2!1sen!2sin"
                                className="w-full h-full"
                                loading="lazy"
                            ></iframe>
                        </div>

                        {/* Info Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
                                <h3 className="text-orange-500 text-sm mb-2">ADDRESS</h3>
                                <p className="text-white font-semibold">
                                    221 Foundry Street,
                                </p>
                                <p className="text-white font-semibold">
                                    Downtown District
                                </p>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
                                <h3 className="text-orange-500 text-sm mb-2">PHONE</h3>
                                <p className="text-white font-semibold">
                                    +1 (555) 214-7788
                                </p>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
                                <h3 className="text-orange-500 text-sm mb-2">EMAIL</h3>
                                <p className="text-white font-semibold">
                                    hello@ironforge.com
                                </p>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
                                <h3 className="text-orange-500 text-sm mb-2">
                                    OPENING HOURS
                                </h3>

                                <p className="text-white font-semibold">
                                    Mon–Fri: 5am–11pm
                                </p>

                                <p className="text-white font-semibold">
                                    Sat–Sun: 7am–9pm
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                            {/* Full Name */}
                            <div>
                                <label className="text-white mb-2 block">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-orange-500"
                                    {...register("fullName", {
                                        required: true,
                                        pattern: /^[A-Za-z ]{3,30}$/,
                                    })}
                                />

                                <div className="h-6 mt-2">
                                    {errors.fullName && (
                                        <p className="text-orange-500 text-sm">
                                            Please enter a valid full name.
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label className="text-white mb-2 block">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    placeholder="you@email.com"
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-orange-500"
                                    {...register("email", {
                                        required: true,
                                        pattern: /^\S+@\S+\.\S+$/,
                                    })}
                                />

                                <div className="h-6 mt-2">
                                    {errors.email && (
                                        <p className="text-orange-500 text-sm">
                                            Please enter a valid email address.
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="text-white mb-2 block">
                                    Message
                                </label>

                                <textarea
                                    rows={6}
                                    placeholder="Tell us what you're looking for..."
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-orange-500 resize-none"
                                    {...register("message", {
                                        required: true,
                                    })}
                                />

                                <div className="h-6 mt-2">
                                    {errors.message && (
                                        <p className="text-orange-500 text-sm">
                                            Please enter your message.
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Button */}
                            <button
                                type="submit"
                                className="
                w-full
                bg-orange-500
                hover:bg-orange-600
                text-black
                font-semibold
                py-4
                rounded-full
                transition-all
                duration-300
                shadow-[0_0_40px_rgba(249,115,22,0.5)]
            "
                            >
                                Send Message
                            </button>

                        </form>
                    </div>
                </div>
            </div>


        </section >
    );
}