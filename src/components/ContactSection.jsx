import React from 'react'
import {Mail, MapPin, Phone} from "lucide-react";

const ContactSection = () => {
    return (
        <section id="contact" className="py-24 px-4 relative bg-primary-foreground/10">
            <div className="container max-w-5xl mx-auto">
                <h2 className="text3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary"> Touch </span>
                </h2>
                <p className="text-center mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? I'm always happy to discuss new
                    ideas and collaborate on exciting projects.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold">Contact Information</h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail  className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a
                                        href="mailto:hello@gmail.com"
                                        className="hover:text-primary transition-colors"
                                    >hello@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone  className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium">Phone</h4>
                                    <a
                                        href="tel:+555123456789"
                                        className="hover:text-primary transition-colors"
                                    >+555 (123) 456-789</a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin  className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium">Location</h4>
                                    <a
                                        href=""
                                        className="hover:text-primary transition-colors"
                                    >Vancouver, BC, Canada</a>
                                </div>
                            </div>
                        </div>
                        <div className="pt-8">
                            <h4>Connect With Me</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ContactSection
