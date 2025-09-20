import "./Shop.css";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";


const Shop = () => {
    const plans = [
        {
            name: "Starter",
            description: "Perfecto para proyectos personales",
            price: "4.99",
            period: "mes",
            features: [
                "1 Sitio Web",
                "10 GB SSD",
                "100 GB Transferencia",
                "5 Cuentas Email",
                "SSL Gratuito",
                "Soporte 24/7"
            ],
            popular: false,
            color: "default"
        },
        {
            name: "Professional",
            description: "Ideal para pequeñas empresas",
            price: "9.99",
            period: "mes",
            features: [
                "5 Sitios Web",
                "50 GB SSD",
                "500 GB Transferencia",
                "25 Cuentas Email",
                "SSL Gratuito",
                "CDN Incluido",
                "Copias de Seguridad",
                "Soporte Prioritario"
            ],
            popular: true,
            color: "primary"
        },
        {
            name: "Business",
            description: "Para empresas en crecimiento",
            price: "19.99",
            period: "mes",
            features: [
                "Sitios Ilimitados",
                "100 GB SSD",
                "1 TB Transferencia",
                "Email Ilimitado",
                "SSL Avanzado",
                "CDN Premium",
                "Copias Automáticas",
                "Staging Gratuito",
                "Soporte VIP"
            ],
            popular: false,
            color: "default"
        }
    ];

    return (
        <>
            <Header />
            <div className="min-h-screen bg-gray-50">
                <main className="py-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Header */}
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-8">
                                ★ Planes de Hosting
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                                Encuentra el Plan
                                <span className="gradient-text block">
                                    Perfecto para Ti
                                </span>
                            </h1>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Hosting confiable con tecnología de vanguardia.
                                Todos los planes incluyen SSL gratuito y soporte 24/7.
                            </p>
                        </div>

                        {/* Plans Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {plans.map((plan) => (
                                <div
                                    key={plan.name}
                                    className={`relative transform transition hover:-translate-y-2 p-6 rounded-lg shadow-md bg-white ${plan.popular ? 'border-2 border-blue-500 glow-primary' : 'border border-gray-200'}`}
                                >
                                    {plan.popular && (
                                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                            <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                                                Más Popular
                                            </span>
                                        </div>
                                    )}

                                    <div className="text-center pb-6">
                                        <div className="text-2xl font-bold">{plan.name}</div>
                                        <div className="text-base mb-2">{plan.description}</div>
                                        <div className="pt-4">
                                            <span className="text-4xl font-bold gradient-text">€{plan.price}</span>
                                            <span className="text-gray-500">/{plan.period}</span>
                                        </div>
                                    </div>

                                    <div className="space-y-4 mb-6">
                                        {plan.features.map((feature, index) => (
                                            <div key={index} className="flex items-center space-x-3">
                                                <span className="text-blue-500 font-bold">✔</span>
                                                <span className="text-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div>
                                        <button
                                            className={`w-full py-2 px-4 rounded font-semibold ${plan.popular ? 'bg-blue-500 text-white shadow-lg hover:shadow-xl' : 'border border-blue-500 text-blue-500 hover:bg-blue-50'}`}
                                        >
                                            Empezar Ahora
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Additional Features */}
                        <div className="mt-24 text-center">
                            <h2 className="text-3xl font-bold mb-12">¿Por qué elegir NaayNet?</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                                {[
                                    { title: "Rendimiento Superior", text: "Servidores SSD con tecnología NVMe y optimización automática para WordPress.", icon: "⚡" },
                                    { title: "Soporte Excepcional", text: "Equipo técnico especializado disponible 24/7 para resolver cualquier consulta.", icon: "⭐" },
                                    { title: "Garantía de Uptime", text: "99.9% de tiempo de actividad garantizado con SLA y compensación.", icon: "✔" },
                                ].map((item, index) => (
                                    <div key={index} className="p-6">
                                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                                        <p className="text-gray-600">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </>
    );
};
export default Shop;