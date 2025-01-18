import { useRef, useState } from "react"
import emailjs from '@emailjs/browser'

const Contact = () => {
    const formRef = useRef()

    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = ({target : {name, value}}) => {
        setForm({...form, [name]: value})
    }

    const handleSubmit =  async (e) => {
        e.preventDefault()
        setLoading(true)

        try{
            await emailjs.send(
                'service_id6gdnn', 
                "template_uowtako",
                {
                    from_name: form.name,
                    to_name: "Ryo Khrisna Fitriawan",
                    from_email: form.email,
                    to_email: "ryokhrisnaf@gmail",
                    message: form.message
                },
                "UnZy7fGkv3kFFRQeO"
            )

            setLoading(false)
            alert('Thank you. I will get back to you as soon as possible.')
        }catch(error){
            setLoading(false)
            console.log(error)
            alert('Something went wrong.')
        }

    }

    return (
        <section className="c-space my-20 max-w-7xl mx-auto" id="contact">
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="assets/terminal.png" alt="terminal background" className="absolute inset-0 min-h-screen" />
                <div className="contact-container">
                    <h3 className="head-text">Let&apos;s talk</h3>
                    <p className="text-lg text-white-600 mt-3">wheter you have a question or just want to say hi, my inbox is open for all.</p>
                    <form action="" ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="field-label">full name</span>
                            <input 
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="what's your name?"
                            />
                        </label>
                        <label className="space-y-3">
                            <span className="field-label">email</span>
                            <input 
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="what's your email?"
                            />
                        </label>
                        <label className="space-y-3">
                            <span className="field-label">your message</span>
                            <textarea 
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="what do you want to say?"
                            />
                        </label>
                        <button className="field-btn" type="submit" disabled={loading}>{loading ? 'Sending...' : 'Send Message'}</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact