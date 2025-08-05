
import { ContactForm } from '@/components/shared/contact-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { COMPANY_ADDRESS, COMPANY_EMAIL, COMPANY_PHONE } from '@/lib/constants';
import { Mail, Phone, MapPin } from 'lucide-react';
import type { Metadata } from 'next';
import { getDictionary } from '@/lib/dictionaries';
import type { Language } from '@/lib/languages';

export const metadata: Metadata = {
  title: 'Contact Us | RSI Chicory',
  description: `Get in touch with the RSI Chicory sales team for B2B inquiries, bulk pricing, and sample requests. Contact us via phone, email, or our online form. Located at ${COMPANY_ADDRESS}.`,
};

const ContactPage = async ({ params: { lang } }: { params: { lang: Language['code'] } }) => {
  const dictionary = await getDictionary(lang);
  const t = dictionary.ContactPage;

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">{t.title}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          {t.subtitle}
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Contact Information */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>{t.contactDetails}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <a href={`tel:${COMPANY_PHONE}`} className="flex items-center gap-4 text-muted-foreground transition-colors hover:text-primary">
                <Phone className="h-6 w-6 text-primary" />
                <span className="text-lg">{COMPANY_PHONE}</span>
              </a>
              <a href={`mailto:${COMPANY_EMAIL}`} className="flex items-center gap-4 text-muted-foreground transition-colors hover:text-primary">
                <Mail className="h-6 w-6 text-primary" />
                <span className="text-lg">{COMPANY_EMAIL}</span>
              </a>
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-6 w-6 shrink-0 text-primary" />
                <p className="text-lg text-muted-foreground">{COMPANY_ADDRESS}</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
                <CardTitle>{t.ourLocation}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="aspect-video overflow-hidden rounded-md">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3546.901597818967!2d78.6750033150522!3d27.56499998285141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974e7a9b8b6932f%3A0x1d5f6618e3251b53!2sUPSIDC%20Industrial%20Area%2C%20Etah%2C%20Uttar%20Pradesh%20207001%2C%20India!5e0!3m2!1sen!2sus!4v1678886400000!5m2!1sen!2sus" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen={true}
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="RSI Chicory Location Map"
                    ></iframe>
                </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>{t.sendMessage}</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm sourcePage="Contact Us Page" dictionary={dictionary} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
