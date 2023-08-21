import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    variable: "--FONT-POPPINS",
    weight: ["300", "500", "700"],
});

export default poppins;
