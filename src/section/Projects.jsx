import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import { myProjects } from '../constant';

// Browser frame mockup component — flat, front-facing, shows video clearly
const BrowserFrame = ({ texture, href }) => {
    // Extract a clean URL label from href
    const urlLabel = href
        ? href.replace(/^https?:\/\//, '').replace(/\/$/, '')
        : 'app.preview';

    return (
        <div className="browser-frame">
            {/* Browser chrome bar */}
            <div className="browser-bar">
                <span className="browser-dot bg-red-400"></span>
                <span className="browser-dot bg-yellow-400"></span>
                <span className="browser-dot bg-green-400"></span>
                <span className="browser-url">{urlLabel}</span>
            </div>
            {/* App preview content */}
            <div className="browser-content">
                <video
                    src={texture}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full object-cover"
                    style={{ aspectRatio: '16/10', display: 'block' }}
                />
            </div>
        </div>
    );
};

const Projects = () => {
    const { language } = useLanguage();
    const t = translations[language].projects;

    // Merge static asset data (texture, tags, logo, href) with translated text
    const projects = t.list.map((translatedProject, index) => ({
        ...myProjects[index],
        ...translatedProject,
    }));

    return (
        <section className="c-space my-20 max-w-7xl m-auto" id="work">
            <p className="head-text">{t.title}</p>

            <div className="flex flex-col gap-16 mt-12">
                {projects.map((project, index) => {
                    const isEven = index % 2 === 0;

                    const TextContent = (
                        <div className="project-card">
                            {/* Spotlight decorative background */}
                            <div className="absolute top-0 right-0 pointer-events-none overflow-hidden rounded-2xl w-full h-full">
                                <img
                                    src={project.spotlight}
                                    alt=""
                                    className="w-full h-full object-cover opacity-40 dark:opacity-20"
                                    aria-hidden="true"
                                />
                            </div>

                            {/* Project logo + title */}
                            <div className="relative flex items-center gap-3">
                                <div
                                    className="p-2.5 rounded-xl w-fit flex-shrink-0"
                                    style={project.logoStyle}
                                >
                                    <img
                                        src={project.logo}
                                        alt={`${project.title} logo`}
                                        className="w-8 h-8 object-contain"
                                    />
                                </div>
                                <div>
                                    <p className="text-gray-900 dark:text-white text-xl font-bold leading-tight">
                                        {project.title}
                                    </p>
                                </div>
                            </div>

                            {/* One-line description */}
                            <p className="relative text-gray-600 dark:text-white-600 text-sm leading-relaxed">
                                {project.desc}
                            </p>

                            {/* Feature bullet points */}
                            {project.bullets && (
                                <ul className="relative flex flex-col gap-2">
                                    {project.bullets.map((bullet, bIndex) => (
                                        <li key={bIndex} className="project-bullet">
                                            <span className="text-lg leading-none flex-shrink-0 mt-0.5">
                                                {bullet.icon}
                                            </span>
                                            <div className="flex flex-col">
                                                <span className="text-gray-900 dark:text-white text-xs font-semibold">
                                                    {bullet.label}
                                                </span>
                                                <span className="text-gray-500 dark:text-white-600 text-xs leading-relaxed">
                                                    {bullet.text}
                                                </span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {/* Tech tags + CTA */}
                            <div className="relative flex items-center justify-between flex-wrap gap-4 mt-auto pt-2 border-t border-gray-200/60 dark:border-black-300/60">
                                <div className="flex items-center gap-2 flex-wrap">
                                    {project.tags.map((tag) => (
                                        <div
                                            key={tag.id}
                                            className="tech-logo"
                                            title={tag.name}
                                        >
                                            <img
                                                src={tag.path}
                                                alt={tag.name}
                                                className="w-5 h-5 object-contain"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <a
                                    href={project.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="live-btn"
                                    id={`project-cta-${index}`}
                                >
                                    {t.checkLive}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="w-3.5 h-3.5"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    );

                    const MockupContent = (
                        <BrowserFrame
                            texture={project.texture}
                            href={project.href}
                        />
                    );

                    return (
                        <div key={index} className="project-row">
                            {isEven ? (
                                <>
                                    {TextContent}
                                    {MockupContent}
                                </>
                            ) : (
                                <>
                                    <div className="order-2 lg:order-1">{MockupContent}</div>
                                    <div className="order-1 lg:order-2">{TextContent}</div>
                                </>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;