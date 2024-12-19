import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import useAlert from "../hooks/useAlert";
import { Alert, Loader } from "../components";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const formRef = useRef();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentAnimation("hit");

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Nishath",
          from_email: form.email,
          to_email: "nishathmohamed01@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )

  };

  return (
    <section className="py-20 pb-5 flex flex-col items-center">
      {alert.show && <Alert {...alert} />}
      <div className="">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">Get in Touch</h1>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 w-[28rem]"
        >
          <label className="flex flex-col">
            <span className="text-lg text-gray-800 font-medium">Name</span>

          </label>
          <label className="flex flex-col">
            <span className="text-lg text-gray-800 font-medium">Email</span>
            <input
              type="email"
              name="email"
              className="input mt-2 p-3 border border-gray-300 rounded-lg focus:border-amber-600 focus:outline-none focus:ring focus:ring-amber-200 transition duration-200"
              placeholder="Enter your email"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="flex flex-col">
            <span className="text-lg text-gray-800 font-medium">Your Message</span>
            <textarea
              name="message"
              rows="5"
              className="textarea mt-2 p-3 border border-gray-300 rounded-lg focus:border-amber-600 focus:outline-none focus:ring focus:ring-amber-200 transition duration-200"
              placeholder="Write your thoughts here..."
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

        </form>
      </div>
    </section>
  );

};

export default Contact;
