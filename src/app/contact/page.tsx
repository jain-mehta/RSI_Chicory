
import { ContactForm } from '@/components/shared/contact-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { COMPANY_ADDRESS, COMPANY_EMAIL, COMPANY_PHONE_1, COMPANY_PHONE_2 } from '@/lib/constants';
import { Mail, Phone, MapPin, LineChart, CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Contact Us | RSI Chicory',
  description: `Get in touch with the RSI Chicory sales team for B2B inquiries, bulk pricing, and sample requests. Contact us via phone, email, or our online form. Located at ${COMPANY_ADDRESS}.`,
};

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
        {/* Hero Section */}
        <section className="relative h-[40vh] min-h-[300px] w-full bg-primary/20">
            <Image
            src="https://images.unsplash.com/photo-1577563908411-5ab7ced106c8?q=80&w=1920"
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
                {/* Contact Information & Services */}
                <div className="flex flex-col gap-12">
                    <div>
                        <h2 className="font-headline text-3xl font-extrabold border-b-2 pb-2 mb-4">Contact Information</h2>
                        <p className="text-lg text-muted-foreground">
                            Reach out to our dedicated sales team for B2B inquiries, bulk pricing, or sample requests. We are available during standard business hours (IST).
                        </p>
                        <div className="mt-8 space-y-6">
                            <a href={`mailto:${COMPANY_EMAIL}`} className="flex items-center gap-4 text-muted-foreground transition-colors hover:text-primary">
                                <Mail className="h-8 w-8 text-primary" />
                                <div>
                                    <p className="font-semibold">Email</p>
                                    <p className="text-lg">{COMPANY_EMAIL}</p>
                                </div>
                            </a>
                            <div className="flex items-start gap-4">
                                <Phone className="mt-1 h-8 w-8 shrink-0 text-primary" />
                                <div>
                                    <p className="font-semibold">Phone</p>
                                    <a href={`tel:${COMPANY_PHONE_1}`} className="text-lg text-muted-foreground transition-colors hover:text-primary">{COMPANY_PHONE_1}</a>
                                    <br />
                                    <a href={`tel:${COMPANY_PHONE_2}`} className="text-lg text-muted-foreground transition-colors hover:text-primary">{COMPANY_PHONE_2}</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
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
                                    <Phone /> Call: {COMPANY_PHONE_2}
                                </a>
                            </Button>
                            <Button asChild variant="outline">
                                <a href={`mailto:${COMPANY_EMAIL}`}>
                                    <Mail /> Email: {COMPANY_EMAIL}
                                </a>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </section>

            {/* Map Section */}
            <section className="mt-20">
                <h2 className="text-center font-headline text-3xl font-bold">Our Location</h2>
                 <p className="mx-auto mt-2 max-w-2xl text-center text-muted-foreground">
                    Visit our manufacturing facility in Etah, Uttar Pradesh.
                </p>
                <div className="mt-8 aspect-video overflow-hidden rounded-lg shadow-md">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3546.901597818967!2d78.6750033150522!3d27.56499998285141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974e7991e771c77%3A0x2966e3c63948695!2sR.S.%20IMPEX!5e0!3m2!1sen!2sus!4v1678886400001!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="RSI Chicory Location Map"
                    ></iframe>
                </div>
            </section>
        </div>
    </div>
  );
};

export default ContactPage;
