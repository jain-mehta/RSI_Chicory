
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { COMPANY_ESTABLISHED } from '@/lib/constants';
import { Building, Globe, Leaf, CheckSquare } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { ProcessDiagram } from '@/components/shared/process-diagram';

export const metadata: Metadata = {
  title: 'About Us | RSI Chicory',
  description: `Learn about RSI Chicory, a leading B2B chicory manufacturer based in Etah, UP, India. Discover our commitment to quality, contract farming, and export readiness. Established in ${COMPANY_ESTABLISHED}.`,
};

const AboutPage = () => {

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] w-full bg-primary/20">
        <Image
          src="https://images.unsplash.com/photo-1549488344-cbb6c144a423?q=80&w=1920"
          alt="Chicory processing facility"
          data-ai-hint="factory exterior"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="font-headline text-4xl font-bold md:text-6xl">About RSI Chicory</h1>
          <p className="mt-2 max-w-2xl text-lg text-primary-foreground/90">
            Manufacturing Excellence, B2B Partnerships, and Export Readiness
          </p>
        </div>
      </section>

      {/* Company Profile Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-headline text-3xl font-bold">Our Story</h2>
            <p className="mt-4 text-muted-foreground">
              Established in {COMPANY_ESTABLISHED}, RS Impex, under the brand name RSI Chicory, was founded with a mission to become a global leader in the B2B chicory market. Based in Etah, Uttar Pradesh, India, we leverage the region's agricultural strengths to produce high-quality chicory products for a worldwide clientele.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our business is built on a foundation of manufacturing excellence, strong B2B partnerships, and a commitment to being fully export-ready. We pride ourselves on our ability to meet the stringent demands of international buyers, from coffee processors and ingredient traders to large-scale food and beverage companies.
            </p>
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=600"
              alt="Inside of a modern food processing plant"
              data-ai-hint="industrial interior"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-secondary py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold">Our Commitment</h2>
            <p className="mx-auto mt-2 max-w-3xl text-muted-foreground">
              We are dedicated to sustainable practices, community empowerment, and delivering unparalleled value to our B2B partners.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="items-center">
                <Leaf className="h-10 w-10 text-primary" />
                <CardTitle className="mt-2">Contract Farming</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                We partner directly with local farmers, ensuring fair prices, providing quality seeds, and promoting sustainable agriculture. This model guarantees a consistent, high-quality, and traceable raw material supply.
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="items-center">
                <CheckSquare className="h-10 w-10 text-primary" />
                <CardTitle className="mt-2">Quality & Compliance</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                Our state-of-the-art facility operates under strict quality control protocols. We maintain strong compliance with industry standards to meet the needs of global markets.
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="items-center">
                <Building className="h-10 w-10 text-primary" />
                <CardTitle className="mt-2">Local Employment</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                We are proud to contribute to the local economy by providing stable employment opportunities within our community, fostering growth and development in the Etah region.
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="items-center">
                <Globe className="h-10 w-10 text-primary" />
                <CardTitle className="mt-2">Export Focus</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                Our operations, packaging, and logistics are optimized for international trade. We are fully equipped to handle bulk orders and serve clients across the globe efficiently and reliably.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Farm to Factory Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold">Our Farm-to-Factory Process</h2>
          <p className="mx-auto mt-2 max-w-3xl text-muted-foreground">
            We manage the entire supply chain to ensure complete traceability and uncompromising quality, from the seed to the final packaged product.
          </p>
        </div>
        <ProcessDiagram />
      </section>

      {/* Certifications Section */}
      <section className="bg-background py-12 md:py-20">
        <div className="container mx-auto px-4">
            <div className="text-center">
                <h2 className="font-headline text-3xl font-bold">Our Certifications</h2>
                <p className="mx-auto mt-2 max-w-3xl text-muted-foreground">
                    Our commitment to quality is backed by industry-recognized certifications, ensuring our products meet both domestic and international standards.
                </p>
                <div className="mt-8 flex justify-center gap-4 md:gap-8">
                    <Badge variant="secondary" className="border-border px-6 py-3 text-lg md:px-8 md:py-4">FSSAI</Badge>
                    <Badge variant="secondary" className="border-border px-6 py-3 text-lg md:px-8 md:py-4">APEDA</Badge>
                    <Badge variant="secondary" className="border-border px-6 py-3 text-lg md:px-8 md:py-4">IEC</Badge>
                    <Badge variant="secondary" className="border-border px-6 py-3 text-lg md:px-8 md:py-4">ISO</Badge>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
