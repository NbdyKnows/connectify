import Header from '../components/header';
import Footer from '../components/footer';

export default function Nosotros() {
    return (
        <div>
        <Header />
        <div className="max-w-6xl mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold">Nosotros</h1>
            <p>Información sobre nosotros.</p>
        </div>
        <Footer />
        </div>
    );
}