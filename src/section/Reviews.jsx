import { useState } from 'react';
import { clientReviews } from '../constant';

const Reviews = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentReview = clientReviews[currentIndex];

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? clientReviews.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === clientReviews.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <section className="c-space my-20 max-w-7xl mx-auto" id="reviews">
            <div className="w-full">
                <h2 className="head-text">Client Reviews</h2>
                <p className="text-white-600 mt-3 text-lg">
                    What my clients say about working with me
                </p>
            </div>

            <div className="mt-12 max-w-4xl mx-auto">
                <div className="relative bg-black-200 border border-black-300 rounded-2xl p-8 md:p-12">
                    {/* Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent rounded-2xl" />

                    {/* Content */}
                    <div className="relative z-10">
                        {/* Quote Icon */}
                        <div className="text-6xl text-violet-500 mb-6">&ldquo;</div>

                        {/* Review Text */}
                        <p className="text-white-800 text-lg md:text-xl leading-relaxed mb-8 min-h-[120px]">
                            {currentReview.review}
                        </p>

                        {/* Client Info */}
                        <div className="flex items-center gap-4 mb-8">
                            <img
                                src={currentReview.img}
                                alt={currentReview.name}
                                className="w-16 h-16 rounded-full object-cover border-2 border-violet-500"
                            />
                            <div>
                                <h4 className="text-white font-bold text-lg">{currentReview.name}</h4>
                                <p className="text-white-600">{currentReview.position}</p>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="flex items-center justify-between">
                            <button
                                onClick={handlePrevious}
                                className="arrow-btn group"
                                aria-label="Previous review"
                            >
                                <img
                                    src="/assets/left-arrow.png"
                                    alt="left arrow"
                                    className="w-4 h-4"
                                />
                            </button>

                            {/* Dots Indicator */}
                            <div className="flex gap-2">
                                {clientReviews.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${ index === currentIndex
                                            ? 'bg-violet-500 w-8'
                                            : 'bg-white-600 hover:bg-white-800'
                                            }`}
                                        aria-label={`Go to review ${ index + 1 }`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={handleNext}
                                className="arrow-btn group"
                                aria-label="Next review"
                            >
                                <img
                                    src="/assets/right-arrow.png"
                                    alt="right arrow"
                                    className="w-4 h-4"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
