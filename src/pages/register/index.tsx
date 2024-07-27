"use client";
import { FormEvent, useState } from "react";
export default function LoginPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // api call
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="h-screen w-screen items-center justify-center">
      <form className="w-96" onSubmit={handleSubmit}>
        <input
          placeholder="username"
          onChange={handleChange}
          name="email"
          value={formData.email}
        />
        <input
          placeholder="password"
          onChange={handleChange}
          name="password"
          value={formData.password}
        />
        <input
          placeholder="confirm password"
          onChange={handleChange}
          name="password"
          value={formData.password}
        />

        <button
          type="submit"
          className="mt-4 w-full bg-blue-500 font-semibold text-white p-2 rounded-md hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
}
