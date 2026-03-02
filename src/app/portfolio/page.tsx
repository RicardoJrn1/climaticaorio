import Header from "../../components/header";
import Hero from "../../components/portfolio";
import Footer from "../../components/footer";
import Portfolio from "../../components/portfolio";

export default function Home() {
    return (
        <div className="relative">
            {/* Manchas de azul gelo fixas que acompanham o scroll */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[15%] left-[5%] w-[600px] h-[600px] bg-sky-300/25 rounded-full blur-[150px]" />
                <div className="absolute top-[5%] right-[5%] w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-[140px]" />
                <div className="absolute top-[55%] right-[0%] w-[550px] h-[550px] bg-blue-300/20 rounded-full blur-[140px]" />
                <div className="absolute top-[35%] left-[40%] w-[400px] h-[400px] bg-cyan-200/25 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10">
                <Header />
                <Portfolio />
                <Footer />
            </div>
        </div>
    );
}