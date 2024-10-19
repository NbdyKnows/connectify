import Header from '../components/header';

export default function Inicio() {
    return (
        <div>
        <Header />
        <div className="max-w-6xl mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold">Inicio</h1>
            <p>Bienvenido a la página de inicio.</p>
        </div>
        </div>
    );
}