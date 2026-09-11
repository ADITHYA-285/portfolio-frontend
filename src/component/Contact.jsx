import { useState } from "react";

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
    });

    const [status, setStatus] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });

        setErrors({
            ...errors,
            [name]: ""
        });

        setStatus("");
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        let newErrors = {
            name: "",
            email: "",
        };

        // Name validation
        if (formData.name.trim() === "") {
            newErrors.name = "Name is required.";
        } else if (formData.name.trim().length < 2) {
            newErrors.name = "Name must be at least 2 characters.";
        } else if (formData.name.trim().length > 50) {
            newErrors.name = "Name must not exceed 50 characters.";
        } else if (!/^[A-Za-z ]+$/.test(formData.name.trim())) {
            newErrors.name = "Name can contain only letters and spaces.";
        }

        // Email validation
        if (formData.email.trim() === "") {
            newErrors.email = "Email is required.";
        } else if (formData.email.trim().length > 150) {
            newErrors.email = "Email must not exceed 150 characters.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
            newErrors.email = "Please enter a valid email address.";
        }

        setErrors(newErrors);

        if (newErrors.name || newErrors.email) {
            return;
        }

        try {
            const response = await fetch(
                "http://localhost:5000/api/messages",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.error || "Failed to send message"
                );
            }

            console.log(data);

            setFormData({
                name: "",
                email: "",
                message: ""
            });

            setStatus("Message sent successfully!");

        } catch (error) {
            console.error("Error sending message:", error);

            setStatus(error.message);
        }
    };

    return (
        <section id="contact" className="contact">

            <div className="contact-content">

                <h2>Let's Work Together</h2>

                <p className="contact-intro">
                    Have a project idea, opportunity, or just want to say hello?
                    Feel free to send me a message.
                </p>

                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label htmlFor="name">
                            Name
                        </label>

                        <input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            maxLength="50"
                        />

                        {errors.name && (
                            <p className="error">
                                {errors.name}
                            </p>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">
                            Email
                        </label>

                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            maxLength="150"
                        />

                        {errors.email && (
                            <p className="error">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">
                            Message
                        </label>

                        <textarea
                            id="message"
                            name="message"
                            placeholder="Tell me about your project..."
                            value={formData.message}
                            onChange={handleChange}
                            maxLength="500"
                        ></textarea>

                        {errors.message && (
                            <p className="error">
                                {errors.message}
                            </p>
                        )}
                    </div>

                    <button type="submit">
                        Send Message →
                    </button>

                    {status && (
                        <p className="form-status">
                            {status}
                        </p>
                    )}

                </form>

            </div>

        </section>
    );
}

export default Contact;