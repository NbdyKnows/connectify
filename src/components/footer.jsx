export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                    <h3 className="font-bold mb-2">Servicio al cliente</h3>
                    <ul>
                        <li>¿Quiénes somos?</li>
                        <li>Términos y condiciones</li>
                        <li>Cómo comprar</li>
                        <li>Preguntas frecuentes</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-2">Participamos en:</h3>
                    <ul>
                        <li>Cyberdays</li>
                        <li>Cyberwoo</li>
                        <li>CLL</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-2">Libro de reclamaciones</h3>
                    <p>Para presentar tu reclamo puedes llenar el formulario.</p>
                </div>
            </div>
        </footer>
    );
}