import { useEffect, useState } from "react";

export default function Testimonials() {
    const reviews = [
        {
            name: "Rahul Verma",
            text: "IRONFORGE completely changed how I train. Down 14kg in six months and stronger than I've ever been.",
        },
        {
            name: "Ananya Kapoor",
            text: "The energy in this place is unmatched. The trainers genuinely care about progress.",
        },
        {
            name: "Karan Mehta",
            text: "Clean equipment, zero waiting, and a CrossFit program that actually pushes you.",
        },
        {
            name: "Simran Kaur",
            text: "Personal training here is worth every rupee. I'm lifting heavier than ever before.",
        },
    ];

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % reviews.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const previousSlide = () => {
        setCurrent((prev) =>
            prev === 0 ? reviews.length - 1 : prev - 1
        );
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % reviews.length);
    };

    return (
        <section className="bg-[#090909] min-h-screen px-6 py-20">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-20">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-8 h-[2px] bg-orange-500"></div>

                        <p className="uppercase tracking-[4px] text-orange-500 font-semibold">
                            Real Results
                        </p>
                    </div>

                    <h1
                        className="text-5xl md:text-7xl text-white"
                        style={{
                            fontFamily: "'Bebas Neue', sans-serif",
                        }}
                    >
                        WHAT OUR MEMBERS SAY
                    </h1>

                    <p className="text-gray-400 mt-6 text-lg">
                        Every review below is from a real IRONFORGE member —
                        no actors, no stock quotes.
                    </p>
                </div>

                {/* Testimonial Slider */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Left Button */}
                    <button
                        onClick={previousSlide}
                        className="
              absolute
              left-[-30px]
              top-1/2
              -translate-y-1/2
              w-14
              h-14
              rounded-full
              bg-white/10
              text-white
              text-2xl
              hover:bg-orange-500
              duration-300
              z-10
            "
                    >
                        ‹
                    </button>

                    {/* Card */}
                    <div
                        className="
              bg-[#121212]
              border
              border-white/10
              rounded-[40px]
              p-12
              min-h-[350px]
              flex
              flex-col
              justify-center
              items-center
              text-center
              hover:border-orange-500
              duration-300
            "
                    >
                        <h1 className="text-7xl text-orange-500 mb-6">
                            “
                        </h1>

                        <p className="text-gray-300 text-2xl leading-10 max-w-3xl mb-10">
                            {reviews[current].text}
                        </p>

                        <div className="text-orange-500 text-2xl mb-6">
                            ★★★★★
                        </div>

                        <h3 className="text-white text-3xl font-semibold">
                            {reviews[current].name}
                        </h3>
                    </div>

                    {/* Right Button */}
                    <button
                        onClick={nextSlide}
                        className="
              absolute
              right-[-30px]
              top-1/2
              -translate-y-1/2
              w-14
              h-14
              rounded-full
              bg-white/10
              text-white
              text-2xl
              hover:bg-orange-500
              duration-300
            "
                    >
                        ›
                    </button>

                    {/* Dots */}
                    <div className="flex justify-center gap-3 mt-10">
                        {reviews.map((_, index) => (
                            <div
                                key={index}
                                onClick={() => setCurrent(index)}
                                className={`
                  h-3
                  rounded-full
                  cursor-pointer
                  duration-300
                  ${current === index
                                        ? "w-8 bg-orange-500"
                                        : "w-3 bg-gray-600"
                                    }
                `}
                            />
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div
                    className="
            mt-24
            bg-orange-500
            rounded-[40px]
            py-20
            px-8
            text-center
          "
                >
                    <h1
                        className="text-4xl md:text-6xl text-black mb-5"
                        style={{
                            fontFamily: "'Bebas Neue', sans-serif",
                        }}
                    >
                        READY TO START YOUR TRANSFORMATION?
                    </h1>

                    <p className="text-black/80 text-lg mb-10">
                        Your first class is on us. Come see what
                        IRONFORGE is all about.
                    </p>

                    <button
                        className="
              bg-black
              text-white
              px-10
              py-4
              rounded-full
              hover:scale-105
              duration-300
            "
                    >
                        Join Now
                    </button>
                </div>
            </div>
        </section>
    );
}