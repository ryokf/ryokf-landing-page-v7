import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-black-300 hover:bg-violet-500 transition-all duration-300 border border-black-200 hover:border-violet-400"
            aria-label="Toggle language"
        >
            <span className="text-white font-medium">
                {language === 'en' ? '🇬🇧 EN' : '🇮🇩 ID'}
            </span>
        </button>
    );
};

export default LanguageSwitcher;
