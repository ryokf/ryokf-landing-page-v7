import { useRef, useState } from "react"
import emailjs from '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast'
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

const Contact = () => {
    const { language } = useLanguage();
    const t = translations[language].contact;
    const formRef = useRef()

    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            await emailjs.send(
                'service_2fhfxug',
                "template_uowtako",
                {
                    from_name: form.name,
                    to_name: "Ryo Khrisna Fitriawan",
                    from_email: form.email,
                    to_email: "ryokhrisnaf@gmail.com",
                    message: form.message
                },
                "UnZy7fGkv3kFFRQeO"
            )

            setLoading(false)
            toast.success(t.successMessage, {
                duration: 4000,
                position: 'bottom-center',
                style: {
                    background: '#10b981',
                    color: '#fff',
                    padding: '16px',
                    borderRadius: '8px',
                },
                iconTheme: {
                    primary: '#fff',
                    secondary: '#10b981',
                },
            })

            // Reset form after successful submission
            setForm({ name: '', email: '', message: '' })
        } catch (error) {
            setLoading(false)
            console.log(error)
            toast.error(t.errorMessage, {
                duration: 4000,
                position: 'bottom-center',
                style: {
                    background: '#ef4444',
                    color: '#fff',
                    padding: '16px',
                    borderRadius: '8px',
                },
                iconTheme: {
                    primary: '#fff',
                    secondary: '#ef4444',
                },
            })
        }

    }

    return (
        <div className="bg-gradient-to-t from-blue-500 dark:from-violet-700">
            <Toaster />
            <section className="c-space py-20 max-w-7xl mx-auto" id="contact">
                <div className="relative min-h-screen flex items-center justify-center flex-col">
                    <img src="assets/terminal.png" alt="terminal background" className="absolute inset-0 min-h-screen opacity-80 invert dark:invert-0" />
                    <div className="contact-container">
                        <h3 className="head-text">{t.title}</h3>
                        <p className="text-lg text-gray-700 dark:text-white-600 mt-3 transition-colors">{t.subtitle}</p>
                        <form action="" ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                            <label className="space-y-3">
                                <span className="field-label">{t.fullName}</span>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    className="field-input"
                                    placeholder={t.namePlaceholder}
                                />
                            </label>
                            <label className="space-y-3">
                                <span className="field-label">{t.email}</span>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    className="field-input"
                                    placeholder={t.emailPlaceholder}
                                />
                            </label>
                            <label className="space-y-3">
                                <span className="field-label">{t.message}</span>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    className="field-input"
                                    placeholder={t.messagePlaceholder}
                                />
                            </label>
                            <button className="field-btn" type="submit" disabled={loading}>{loading ? t.sending : t.sendMessage}</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact