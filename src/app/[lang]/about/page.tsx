
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { COMPANY_ESTABLISHED } from '@/lib/constants';
import { Building, Globe, Leaf, CheckSquare } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { getDictionary } from '@/lib/dictionaries';
import type { Language } from '@/lib/languages';


export const metadata: Metadata = {
  title: 'About Us | RSI Chicory',
  description: `Learn about RSI Chicory, a leading B2B chicory manufacturer based in Etah, UP, India. Discover our commitment to quality, contract farming, and export readiness. Established in ${COMPANY_ESTABLISHED}.`,
};

const AboutPage = async ({ params: { lang } }: { params: { lang: Language['code'] } }) => {
  const dictionary = await getDictionary(lang);
  const t = dictionary.AboutPage;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] w-full bg-primary/20">
        <Image
          src="https://images.unsplash.com/photo-1549488344-cbb6c144a423?q=80&w=1920"
          alt="Chicory processing facility"
          data-ai-hint="factory exterior"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="font-headline text-4xl font-bold md:text-6xl">{t.title}</h1>
          <p className="mt-2 max-w-2xl text-lg text-primary-foreground/90">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* Company Profile Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-headline text-3xl font-bold">{t.ourStory}</h2>
            <p className="mt-4 text-muted-foreground">
              {t.storyP1.replace('{COMPANY_ESTABLISHED}', COMPANY_ESTABLISHED.toString())}
            </p>
            <p className="mt-4 text-muted-foreground">
              {t.storyP2}
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
            <h2 className="font-headline text-3xl font-bold">{t.commitmentTitle}</h2>
            <p className="mx-auto mt-2 max-w-3xl text-muted-foreground">
              {t.commitmentSubtitle}
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="items-center">
                <Leaf className="h-10 w-10 text-primary" />
                <CardTitle className="mt-2">{t.contractFarming}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                {t.contractFarmingDesc}
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="items-center">
                <CheckSquare className="h-10 w-10 text-primary" />
                <CardTitle className="mt-2">{t.qualityCompliance}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                {t.qualityComplianceDesc}
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="items-center">
                <Building className="h-10 w-10 text-primary" />
                <CardTitle className="mt-2">{t.localEmployment}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                {t.localEmploymentDesc}
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="items-center">
                <Globe className="h-10 w-10 text-primary" />
                <CardTitle className="mt-2">{t.exportFocus}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                {t.exportFocusDesc}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold">{t.certificationsTitle}</h2>
          <p className="mx-auto mt-2 max-w-3xl text-muted-foreground">
            {t.certificationsSubtitle}
          </p>
          <div className="mt-8 flex justify-center gap-4 md:gap-8">
            <Badge className="h-auto px-4 py-2 text-lg md:px-6 md:py-3 md:text-xl">FSSAI</Badge>
            <Badge className="h-auto px-4 py-2 text-lg md:px-6 md:py-3 md:text-xl">APEDA</Badge>
            <Badge className="h-auto px-4 py-2 text-lg md:px-6 md:py-3 md:text-xl">IEC</Badge>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
