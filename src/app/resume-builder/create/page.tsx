"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function CreateResumePage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    education: "",
    skills: "",
    experience: "",
    projects: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="max-w-2xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Create Your Resume</h1>
        <p className="text-gray-600 mt-1">Step {step} of 4</p>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>
      </div>

      {step === 1 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Personal Information</h2>
          <input
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
          <input
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
          <input
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
          <input
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Education</h2>
          <textarea
            name="education"
            placeholder="e.g. B.Tech Computer Science, XYZ University, 2020-2024"
            value={formData.education}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 h-32"
          />
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Skills & Experience</h2>
          <textarea
            name="skills"
            placeholder="e.g. JavaScript, React, Python, Node.js"
            value={formData.skills}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 h-24"
          />
          <textarea
            name="experience"
            placeholder="e.g. Software Intern at ABC Company, June 2023"
            value={formData.experience}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 h-24"
          />
        </div>
      )}

      {step === 4 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Projects</h2>
          <textarea
            name="projects"
            placeholder="e.g. Built an e-commerce website using React and Node.js"
            value={formData.projects}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 h-32"
          />
        </div>
      )}

      <div className="flex justify-between mt-8">
        {step > 1 && (
          <Button variant="outline" onClick={() => setStep(step - 1)}>
            Back
          </Button>
        )}
        {step < 4 ? (
          <Button onClick={() => setStep(step + 1)} className="ml-auto">
            Next
          </Button>
        ) : (
          <Button className="ml-auto bg-green-600 hover:bg-green-700">
            Generate Resume with AI
          </Button>
        )}
      </div>
    </main>
  );
}