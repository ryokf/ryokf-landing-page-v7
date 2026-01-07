import { useState } from 'react';
import PropTypes from 'prop-types';
import { services } from '../constant';

const ServiceCard = ({ service }) => {
    const [transform, setTransform] = useState('');

    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        setTransform(`perspective(1000px) rotateX(${ rotateX }deg) rotateY(${ rotateY }deg) scale3d(1.05, 1.05, 1.05)`);
    };

    const handleMouseLeave = () => {
        setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    };

    return (
        <div
            className="group relative p-8 rounded-2xl bg-black-200 border border-black-300 hover:border-violet-500 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/20"
            style={{
                transform: transform,
                transition: 'transform 0.1s ease-out, border-color 0.3s, box-shadow 0.3s',
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

            <div className="relative z-10">
                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-violet-400 transition-colors">
                    {service.title}
                </h3>

                <p className="text-white-600 leading-relaxed">
                    {service.description}
                </p>
            </div>
        </div>
    );
};

const Services = () => {
    return (
        <section className="c-space my-20 max-w-7xl mx-auto" id="services">
            <div className="w-full">
                <h2 className="head-text">My Services</h2>
                <p className="text-white-600 mt-3 text-lg">
                    I offer a comprehensive range of development services to bring your ideas to life
                </p>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-12">
                {services.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                ))}
            </div>
        </section>
    );
};

export default Services;

ServiceCard.propTypes = {
    service: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
    }).isRequired,
};
