import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-white shadow-md py-4 sticky top-0 z-50">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <motion.h1
            className="text-3xl font-bold text-blue-600"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Q<span className="text-black">uardlian</span>
          </motion.h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#services" className="text-gray-700 hover:text-blue-600">Services</a></li>
              <li><a href="#about" className="text-gray-700 hover:text-blue-600">About Us</a></li>
              <li><a href="#portfolio" className="text-gray-700 hover:text-blue-600">Portfolio</a></li>
              <li><a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <Parallax speed={-10}>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-500 to-purple-700 opacity-30"></div>
        </Parallax>
        <div className="container mx-auto text-center relative z-10">
          <motion.h1
            className="text-5xl font-extrabold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Empowering Innovation with Security and Excellence
          </motion.h1>
          <motion.p
            className="mt-4 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Your partner in DevOps, software development, and cybersecurity solutions.
          </motion.p>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <Button className="mt-6 bg-white text-blue-600 hover:bg-gray-200">
              Get Started
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "DevOps Support", description: "Streamline your infrastructure with CI/CD pipelines and automation." },
              { title: "Cloud Security", description: "Secure your cloud environment with robust protection strategies." },
              { title: "Custom Software Development", description: "Build scalable apps for Android, iOS, Linux, and Windows platforms." }
            ].map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card>
                  <CardContent>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="text-gray-600 mt-2">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">About Quardlian</h2>
          <motion.p
            className="text-gray-700 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            Founded by <strong>Mr. Abhishek Panda</strong> and <strong>Mr. Jagan K. Pradhan</strong>, Quardlian is a non-profit organization committed to delivering top-notch security, DevOps, and software solutions to empower businesses worldwide. Our mission is to transform challenges into opportunities and help our clients achieve their goals with precision and care.
          </motion.p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Portfolio</h2>
          <motion.div
            className="grid md:grid-cols-2 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Card>
              <CardContent>
                <h3 className="text-xl font-semibold">Cloud Security Implementation</h3>
                <p className="text-gray-600 mt-2">Enhanced the security of a global e-commerce platform.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-xl font-semibold">Mobile Application Development</h3>
                <p className="text-gray-600 mt-2">Delivered a custom Android and iOS app for a logistics company.</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
          <motion.p
            className="text-gray-700 max-w-2xl mx-auto mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            Ready to partner with Quardlian? Reach out to us today to discuss your project requirements and let us build something extraordinary together.
          </motion.p>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Button className="bg-blue-600 text-white hover:bg-blue-700">Get in Touch</Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-4 text-center text-white">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          &copy; {new Date().getFullYear()} Quardlian. All Rights Reserved.
        </motion.p>
      </footer>
    </div>
  );
};

export default HomePage;
