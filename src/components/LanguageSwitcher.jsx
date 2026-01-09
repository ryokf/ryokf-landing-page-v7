import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-200 dark:bg-black-300 hover:bg-gray-300 dark:hover:bg-violet-500 transition-all duration-300 border border-gray-300 dark:border-black-200 hover:border-violet-400 text-gray-900 dark:text-white font-medium"
            aria-label="Toggle language"
        >
            <span>
                {language === 'en' ? '🇬🇧 EN' : '🇮🇩 ID'}
            </span>
        </button>
    );
};

export default LanguageSwitcher;
