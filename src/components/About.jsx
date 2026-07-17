import { Target, Eye, Medal, Users, Handshake, Clock } from "lucide-react";

function About() {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-[#090909] flex items-center justify-center px-8 md:px-20 py-24">
                <div className="w-full grid md:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div>
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-8 h-[2px] bg-orange-500"></div>
                            <p className="text-orange-500 uppercase tracking-[3px] font-semibold">
                                Our Story
                            </p>
                        </div>

                        <h1
                            className="text-white text-4xl mb-8"
                            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                        >
                            BUILT BY LIFTERS,
                            <br />
                            FOR LIFTERS
                        </h1>

                        <p className="text-gray-400 mb-6">
                            IRONFORGE opened its doors as a single free-weight room and a
                            handful of coaches who believed fitness spaces had gotten too
                            impersonal. Today, we're a full-service strength and conditioning
                            studio—but the founding belief hasn't changed: people train harder
                            and longer when they feel seen, supported, and genuinely coached.
                        </p>

                        <p className="text-gray-400">
                            Every program on our floor, from beginner mobility work to
                            competitive powerlifting, is designed by our in-house coaching
                            team and reviewed quarterly against member results—not guesswork.
                        </p>
                    </div>

                    {/* Right Content */}
                    <div className="grid grid-cols-2 gap-4 h-[450px]">
                        {/* Add your images/cards here */}
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="bg-[#090909] py-24 px-8 md:px-20">
                {/* Rest of your code... */}
            </section>

            {/* Remaining sections stay unchanged */}
        </>
    );
}

export default About;