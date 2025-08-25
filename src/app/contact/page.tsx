"use client"
import { ContactForm } from '@/components/shared/contact-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { COMPANY_ADDRESS, COMPANY_EMAIL, COMPANY_PHONE_2 } from '@/lib/constants';
import { Mail, Phone, MapPin, LineChart, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Contact from "@/assets/images/Contact us hero images.png";
import EmailLink from '@/components/shared/email-link';

const ContactPage = () => {
    const services = [
        "Bulk Supply & Wholesale",
        "Custom Processing",
        "Export Documentation",
        "Quality Certification",
        "Logistics Support"
    ];

    return (
        <div>
            <section className="relative h-[40vh] min-h-[300px] w-full bg-primary/20">
                <Image
                    src={Contact}
                    alt="Customer service representative"
                    data-ai-hint="contact center"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
                    <h1 className="font-headline text-4xl font-bold md:text-6xl">Get in Touch</h1>
                    <p className="mt-2 max-w-2xl text-lg text-primary-foreground/90">
                        We're here to help with all your B2B chicory needs.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-12 md:py-20">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
                    <div className="flex flex-col gap-12">
                        <div>
                            <h2 className="font-headline text-3xl font-extrabold border-b-2 pb-2 mb-4">Contact Information</h2>
                            <p className="text-lg text-muted-foreground">
                                Reach out to our dedicated sales team for B2B inquiries, bulk pricing, or sample requests. We are available during standard business hours (IST).
                            </p>
                            <div className="mt-8 s">
                                <div className="flex items-start gap-4 p-4 rounded-lg ">
                                    <Mail className="h-8 w-8 shrink-0 text-primary" />
                                    <div className="flex flex-col">
                                        <span className="font-semibold">Email</span>
                                        <EmailLink
                                            email={COMPANY_EMAIL}
                                            variant="link"
                                            className="text-lg text-muted-foreground"
                                        >
                                            {COMPANY_EMAIL}
                                        </EmailLink>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 rounded-lg ">
                                    <Phone className="mt-1 h-8 w-8 shrink-0 text-primary" />
                                    <div>
                                        <p className="font-semibold">Phone</p>
                                        <a href={`tel:${COMPANY_PHONE_2}`} className="text-lg text-muted-foreground">{COMPANY_PHONE_2}</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 rounded-lg ">
                                    <MapPin className="mt-1 h-8 w-8 shrink-0 text-primary" />
                                    <div>
                                        <p className="font-semibold">Our Office</p>
                                        <p className="text-lg text-muted-foreground">{COMPANY_ADDRESS}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <LineChart className="h-6 w-6" />
                                    Our Services
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    {services.map(service => (
                                        <li key={service} className="flex items-center gap-3">
                                            <CheckCircle className="h-5 w-5 text-primary" />
                                            <span className="text-muted-foreground">{service}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <Card>
                            <CardHeader>
                                <CardTitle>Send us a Message</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ContactForm sourcePage="Contact Us Page" />
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Immediate Assistance Section */}
                <section className="mt-20">
                    <Card className="bg-secondary">
                        <CardContent className="p-8 text-center">
                            <h2 className="text-2xl font-bold">Need Immediate Assistance?</h2>
                            <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
                                Our sales team is ready to help with your chicory requirements. Contact us directly for faster response.
                            </p>
                            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
                                <Button asChild>
                                    <a href={`tel:${COMPANY_PHONE_2}`}>
                                        <Phone className="mr-2 h-5 w-5" /> Call: {COMPANY_PHONE_2}
                                    </a>
                                </Button>
                                <EmailLink
                                    email={COMPANY_EMAIL}
                                    className="border-[1px] border-black bg-transparent text-muted-foreground hover:bg-gray-300 px-4 py-2"
                                >
                                    Email: {COMPANY_EMAIL}
                                </EmailLink>
                            </div>
                        </CardContent>
                    </Card>
                </section>
            </div>
        </div>
    );
};

export default ContactPage;
