import Header from '../components/header';
import Footer from '../components/footer';

export default function Inicio() {
    return (
    <div>
        <Header />
        <div className="relative">
            <div
                className="relative h-screen bg-cover bg-center z-0"
                style={{ backgroundImage: 'url("https://images.rappi.pe/restaurants_background/petoripolleria-1665756337466.jpg")' }}
            >
                <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/50 p-8 rounded-lg text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white">
                    La mejor comida al mejor precio
                    </h1>
                </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
    );
}