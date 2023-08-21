import Banner from "@/shared/components/Banner";
import Footer from "@/shared/components/Footer";
import Hero from "@/shared/components/Hero";
import MainContent from "@/shared/components/MainContent";
import Navbar from "@/shared/components/Navbar";

const Page = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <MainContent />
            <Banner />
            <Footer />
        </main>
    );
};

export default Page;
