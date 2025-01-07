"use client"

import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";


const ApplicationForm = () => {
    
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        cv: "",
      });
    
      const [isSubmitting, setIsSubmitting] = useState(false);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
    
        // Simulating an API call
        setTimeout(() => {
          alert("Application successful!");
          setFormData({ name: "", email: "",phone: "", cv: "" });
          setIsSubmitting(false);
        }, 1000);
      };
    
      return (
        <div className="">
          <Card className=" m-8 mr-2  md:mr-4">
            <CardHeader>
              <CardTitle>Apply</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="mr-8 md:size-2/3 lg:size-1/3">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
    
                <div className="mr-8 md:size-2/3 lg:size-1/3">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mr-8 md:size-2/3 lg:size-1/3">
                  <Label htmlFor="phone">Phone number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="phone"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    
                  />
                </div>
    
                <div className="mr-8 md:size-2/3 lg:size-1/3">
                  <Label htmlFor="cv">CV *</Label>
                  <Input 
                    id="file"
                    name="file"
                    type="file"
                    placeholder="Choose Pdf file"
                    accept="pdf"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
               <div className="mt-8 flex items-center ">
                <p className="lg:w-1/3 w-2/3">
                    By clicking <span className="text-purple-600 font-bold">Send application,</span> you agree to our <span className=" text-purple-600 font-bold underline">User Agreement</span>, <span className="text-purple-600 font-bold underline">Privacy Policy</span>, and <span className="text-purple-600 font-bold underline">Cookie Policy.</span>
                </p>
                <Button type="submit" disabled={isSubmitting} className=' rounded-3xl'>
                  {isSubmitting ? "Applying..." : "Send Application"}
                </Button>
               </div>
                
              </form>
            </CardContent>
          </Card>
        
          </div>
      )    
}

export default ApplicationForm