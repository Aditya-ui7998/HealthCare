import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    reason: "",
    message: "",
    contactMethod: "Email",
  });

  const [validated, setValidated] = useState(false);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // Handle form data submission
      console.log(formData);
    }
    setValidated(true);
  };

  // Handle form changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mt-5 text-white bg-dark p-4 rounded"> {/* Changed background and text color */}
      <h2 className="mb-4">Contact Us for Healthcare Services</h2>
      <form noValidate validated={validated.toString()} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleChange}
          />
          <div className="invalid-feedback">First name is required.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            required
            value={formData.lastName}
            onChange={handleChange}
          />
          <div className="invalid-feedback">Last name is required.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <div className="invalid-feedback">
            Please enter a valid email address.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
          />
          <div className="invalid-feedback">
            Please enter a valid phone number.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="reason" className="form-label">Reason for Contact</label>
          <select
            className="form-select"
            id="reason"
            name="reason"
            required
            value={formData.reason}
            onChange={handleChange}
          >
            <option value="">Select a reason...</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Appointment">Appointment</option>
            <option value="Billing">Billing</option>
            <option value="Medical Records">Medical Records</option>
          </select>
          <div className="invalid-feedback">
            Please select a reason for contact.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message (Optional)</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="3"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Preferred Contact Method</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="contactMethod"
              id="emailContact"
              value="Email"
              checked={formData.contactMethod === "Email"}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="emailContact">
              Email
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="contactMethod"
              id="phoneContact"
              value="Phone"
              checked={formData.contactMethod === "Phone"}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="phoneContact">
              Phone
            </label>
          </div>
        </div>

        <button className="btn btn-danger" type="submit"> {/* Changed button color to red */}
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
