import Header from '../components/header';
import ProductList from '../components/product-list';

export default function Menu() {
    return (
        <div>
        <Header />
        <div className="max-w-6xl mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold">Menu</h1>
            <ProductList />
        </div>
        </div>
    );
}