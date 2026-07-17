import Strength from "../assets/programers/Strength.png";
import WeightLoss from "../assets/programers/weightloss.png";
import Cardio from "../assets/programers/cardio.png";
import Yoga from "../assets/programers/yoga.png";
import Crossfit from "../assets/programers/crossfit.png";
import Personal from "../assets/programers/personal training.png";

import {
    FaDumbbell,
    FaFire,
    FaHeartbeat,
    FaSpa,
    FaWeightHanging,
    FaUser,
} from "react-icons/fa";

const programs = [
    {
        id: 1,
        title: "Strength Training",
        description: "Build lean muscle and increase strength with expert training programs.",
        duration: "12 Weeks",
        image: Strength,
        icon: FaDumbbell,
        
    },
    {
        id: 2,
        title: "Weight Loss",
        description: "Burn fat and lose weight with effective workouts and nutrition guidance.",
        duration: "8 Weeks",
        image: WeightLoss,
        icon: FaFire,
    },
    {
        id: 3,
        title: "Cardio Fitness",
        description: "Boost endurance and improve heart health through cardio workouts.",
        duration: "6 Weeks",
        image: Cardio,
        icon: FaHeartbeat,
    },
    {
        id: 4,
        title: "Yoga & Flexibility",
        description: "Improve flexibility, reduce stress, and enhance overall well-being.",
        duration: "10 Weeks",
        image: Yoga,
        icon: FaSpa,
    },
    {
        id: 5,
        title: "CrossFit",
        description: "High-intensity functional training to build strength and stamina.",
        duration: "8 Weeks",
        image: Crossfit,
        icon: FaWeightHanging,
    },
    {
        id: 6,
        title: "Personal Training",
        description: "Get a customized fitness plan with expert personal coaching.",
        duration: "Custom Plan",
        image: Personal,
        icon: FaUser,
    },
];

export default programs;