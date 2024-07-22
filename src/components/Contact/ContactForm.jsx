import React, { useState } from "react";
//= Components
import Split from "@/components/Common/Split";
//= Static Data
import contentFormData from "@/data/contact-form.json";

// Define the dropdown options
const options = [
  { value: "", label: "Please Select One" },
  { value: "Artificial Intelligence Course / Xeven Skills", label: "Artificial Intelligence Course / Xeven Skills" },
  { value: "Big Data Analytics", label: "Big Data Analytics" },
  { value: "Chat GPT Integrations", label: "Chat GPT Integrations" },
  { value: "Cloud Computing", label: "Cloud Computing" },
  { value: "Computer Vision", label: "Computer Vision" },
  { value: "Internet of Things", label: "Internet of Things" },
  { value: "IT Consulting", label: "IT Consulting" },
  { value: "Machine Learning", label: "Machine Learning" },
  { value: "Natural Language Processing", label: "Natural Language Processing" },
  { value: "Predictive Modeling", label: "Predictive Modeling" },
  { value: "Web Development", label: "Web Development" },
  { value: "Others", label: "Others" },
];

function ContactForm({ theme }) {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    number: "",
    message: "",
    helpRequest: "", // Added field for dropdown
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  return (
    <section className="contact section-padding" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="form md-mb50">
              <h4 className="fw-700 color-font mb-50">Get In Touch.</h4>

              <form onSubmit={handleSubmit}>
                <div className="messages"></div>

                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="form_help_request">How can we help you</label>
                    <select
                      id="form_help_request"
                      name="helpRequest"
                      className="border p-3 text-black w-full h-12"
                      value={formData.helpRequest}
                      onChange={handleChange}
                      required
                    >
                      {options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="form_name">First Name</label>
                    <input
                      id="form_name"
                      className="border px-2 text-black w-full h-12"
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="form_last_name">Last Name</label>
                    <input
                      id="form_last_name"
                      className="border px-2 text-black w-full h-12"
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="form_email">Email</label>
                    <input
                      id="form_email"
                      type="email"
                      className="border px-2 text-black w-full h-12"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="form_number">Number</label>
                    <input
                      id="form_number"
                      type="number"
                      className="border px-2 text-black w-full h-12"
                      name="number"
                      placeholder="Number"
                      value={formData.number}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <textarea
                    id="form_message"
                    name="message"
                    placeholder="Message"
                    rows="4"
                    className="border p-3 text-black w-full h-32"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={`butn ${theme === "light" ? "dark" : "bord"}`}
                >
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="cont-info">
              <h4 className="fw-700 color-font mb-50">Contact Info.</h4>
              <Split>
                <h3 className="wow" data-splitting>
                  {contentFormData.title}
                </h3>
              </Split>
              <div className="item mb-40">
                <h5>
                  <a href="#0">{contentFormData.email}</a>
                </h5>
              </div>

              <div className="social mt-50">
                <a
                  target="blank"
                  href="https://www.facebook.com/gatekod"
                  className="icon"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  target="blank"
                  href="https://www.linkedin.com/company/gatekod/people/"
                  className="icon"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
