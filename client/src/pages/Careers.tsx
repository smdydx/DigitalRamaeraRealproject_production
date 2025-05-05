
import React from "react";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const Careers = () => {
  const openPositions = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Delhi NCR",
      type: "Full Time"
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote",
      type: "Full Time"
    },
    {
      title: "Business Development Executive",
      department: "Sales",
      location: "Delhi NCR",
      type: "Full Time"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-black/95">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Join Our Team</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We're looking for talented individuals who are passionate about technology and innovation.
            Join us in building the future of digital solutions.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {openPositions.map((position, index) => (
            <div
              key={index}
              className="bg-zinc-900/50 border border-green-500/20 rounded-lg p-6 hover:border-green-500/40 transition-all"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{position.title}</h3>
              <div className="space-y-2 text-gray-400 mb-4">
                <p>{position.department}</p>
                <p>{position.location}</p>
                <p>{position.type}</p>
              </div>
              <Button 
                className="w-full bg-green-500/10 hover:bg-green-500/20 text-green-400 border border-green-500/30"
                onClick={() => window.location.href = 'mailto:careers@company.com'}
              >
                <Mail className="mr-2 h-4 w-4" />
                Apply Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;
