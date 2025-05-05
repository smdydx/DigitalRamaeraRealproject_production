
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Upload, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Careers = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    position: "",
    experience: "",
    currentSalary: "",
    expectedSalary: "",
    comments: "",
    resume: null as File | null,
    isRobot: false
  });

  const [openPositions, setOpenPositions] = useState([]);
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('/api/careers/jobs');
        if (response.ok) {
          const jobs = await response.json();
          setOpenPositions(jobs);
        }
      } catch (error) {
        console.error('Failed to fetch jobs:', error);
      }
    };
    fetchJobs();
  }, []);

  const handlePhotoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type.startsWith('image/')) {
        setPhoto(file);
      } else {
        toast({
          title: "Invalid file type",
          description: "Please upload an image file",
          variant: "destructive"
        });
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type === "application/pdf" || file.type === "application/msword" || 
          file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
        setFormData({ ...formData, resume: file });
      } else {
        toast({
          title: "Invalid file type",
          description: "Please upload PDF or DOC/DOCX files only",
          variant: "destructive"
        });
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.isRobot) {
      setIsSubmitting(true);
      
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (key === 'resume' && value) {
          formDataToSend.append('resume', value);
        } else if (key !== 'isRobot') {
          formDataToSend.append(key, value.toString());
        }
      });

      try {
        const response = await fetch('/api/careers/apply', {
          method: 'POST',
          body: formDataToSend
        });

        if (response.ok) {
          toast({
            title: "Application Submitted",
            description: "Thank you for applying! We'll get back to you soon.",
          });
          setFormData({
            fullName: "", email: "", phone: "", address: "", position: "",
            experience: "", currentSalary: "", expectedSalary: "", comments: "",
            resume: null, isRobot: false
          });
        }
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to submit application. Please try again.",
          variant: "destructive"
        });
      }
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-black/95">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">We're Hiring!</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join our team and help build the future of digital solutions.
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
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Apply Now</h2>
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                placeholder="Full Name"
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                required
                className="bg-zinc-800/50"
              />
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
                className="bg-zinc-800/50"
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required
                className="bg-zinc-800/50"
              />
              <Input
                placeholder="Address"
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
                required
                className="bg-zinc-800/50"
              />
            </div>

            <Input
              placeholder="Apply for Position"
              value={formData.position}
              onChange={(e) => setFormData({...formData, position: e.target.value})}
              required
              className="bg-zinc-800/50"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                placeholder="Experience Level"
                value={formData.experience}
                onChange={(e) => setFormData({...formData, experience: e.target.value})}
                required
                className="bg-zinc-800/50"
              />
              <Input
                placeholder="Current Salary"
                value={formData.currentSalary}
                onChange={(e) => setFormData({...formData, currentSalary: e.target.value})}
                required
                className="bg-zinc-800/50"
              />
            </div>

            <Input
              placeholder="Expected Salary"
              value={formData.expectedSalary}
              onChange={(e) => setFormData({...formData, expectedSalary: e.target.value})}
              required
              className="bg-zinc-800/50"
            />

            <Textarea
              placeholder="Additional Comments"
              value={formData.comments}
              onChange={(e) => setFormData({...formData, comments: e.target.value})}
              className="bg-zinc-800/50 h-32"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-4">
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  required
                  className="bg-zinc-800/50"
                />
                {photo && (
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                )}
              </div>
              <div className="flex items-center gap-4">
                <Input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  required
                  className="bg-zinc-800/50"
                />
                {formData.resume && (
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                )}
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.isRobot}
                  onChange={(e) => setFormData({...formData, isRobot: e.target.checked})}
                  className="w-4 h-4"
                />
                <span className="text-gray-400">I'm not a robot</span>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || !formData.isRobot}
                className="w-full bg-green-500/10 hover:bg-green-500/20 text-green-400 border border-green-500/30"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Careers;
