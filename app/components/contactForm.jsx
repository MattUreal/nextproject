// "use client"

// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { Input } from "@shadcn/ui/input";
// import { Textarea } from "@shadcn/ui/textarea";
// import { Button } from "@shadcn/ui/button";
// import { Label } from "@shadcn/ui/label";
// import { Card, CardContent, CardHeader, CardTitle } from "@shadcn/ui/card";

// const ContactForm=()=> {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Simulating an API call
//     setTimeout(() => {
//       alert("Form submitted successfully!");
//       setFormData({ name: "", email: "", message: "" });
//       setIsSubmitting(false);
//     }, 1000);
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <Card className="w-full max-w-md shadow-lg">
//         <CardHeader>
//           <CardTitle>Contact Us</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <Label htmlFor="name">Name</Label>
//               <Input
//                 id="name"
//                 name="name"
//                 type="text"
//                 placeholder="Your name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div>
//               <Label htmlFor="email">Email</Label>
//               <Input
//                 id="email"
//                 name="email"
//                 type="email"
//                 placeholder="Your email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div>
//               <Label htmlFor="message">Message</Label>
//               <Textarea
//                 id="message"
//                 name="message"
//                 placeholder="Your message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <Button type="submit" disabled={isSubmitting} className="w-full">
//               {isSubmitting ? "Sending..." : "Send Message"}
//             </Button>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

// export default  ContactForm