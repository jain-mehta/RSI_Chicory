
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { products, Product } from '@/lib/products';
import { ArrowRight, Leaf, Package, Globe, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const featuredProductSlugs = [
    'raw-chicory-roots',
    'dried-chicory-cubes',
    'hand-cut-chicory-roots',
    'roasted-chicory-granules',
  ];

  const featuredProducts = featuredProductSlugs
    .map(slug => products.find(p => p.slug === slug))
    .filter((p): p is Product => p !== undefined);


  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full bg-primary/20">
        <Image
          src="https://images.unsplash.com/photo-1589732380879-bf11597ac7de?q=80&w=1920"
          alt="Chicory farm landscape with a beautiful sunrise"
          data-ai-hint="chicory farm"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center p-4 text-center text-white">
          <h1 className="font-headline text-3xl font-bold tracking-tight text-primary-foreground md:text-6xl">
            <span style={{color: '#00008B'}}>RS</span><span style={{color: '#B81C22'}}>I</span> Chicor<sup style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '1em',
              height: '1em',
              borderRadius: '50%',
              border: '2px solid white',
              fontSize: '0.4em',
              marginLeft: '0.2em',
              fontWeight: 'normal',
              verticalAlign: 'super',
            }}>TM</sup>y: Your Trusted B2B Partner
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/90 md:text-xl">
            Premium Chicory Products Sourced Directly From Indian Farms. Built for Global Scale.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/products">View Products</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact?inquiry=sample">Request Sample</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="bg-background py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="mb-4 font-headline text-3xl font-bold">Our Products</h2>
            <p className="mx-auto mb-12 max-w-3xl text-muted-foreground">
              We offer a comprehensive range of chicory products to meet the diverse needs of coffee processors, ingredient traders, food, and medicine manufacturers worldwide.
            </p>
          </div>
          <div className="space-y-16">
            {featuredProducts.map((product, index) => (
              <div key={product.slug} className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
                <div className={`h-80 w-full overflow-hidden rounded-lg shadow-md md:h-96 ${index % 2 === 1 ? 'md:order-last' : ''}`}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    data-ai-hint={product.aiHint}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="font-headline text-2xl font-bold">{product.name}</h3>
                  <p className="text-muted-foreground">{product.description}</p>
                  <Button asChild variant="link" className="p-0 text-accent">
                    <Link href={`/products/${product.slug}`}>
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/products">Explore All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quality Commitment Section */}
      <section className="bg-secondary py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-4 font-headline text-3xl font-bold">Uncompromising Quality & Traceability</h2>
              <p className="mb-6 text-muted-foreground">
                From French-lineage seeds to your final product, we ensure excellence at every step. Our contract farming model empowers local communities and guarantees a fully traceable, high-quality supply chain compliant with strict international standards.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-primary" />
                  <div>
                    <h4 className="font-semibold">Local Sourcing</h4>
                    <p className="text-muted-foreground">Directly partnered with local farmers in Uttar Pradesh, India.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-primary" />
                  <div>
                    <h4 className="font-semibold">Strict Standards</h4>
                    <p className="text-muted-foreground">Adherence to global quality benchmarks for food safety and consistency.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-primary" />
                  <div>
                    <h4 className="font-semibold">Export Ready</h4>
                    <p className="text-muted-foreground">Reliable logistics and packaging for international B2B clients.</p>
                  </div>
                </li>
              </ul>
              <Button asChild className="mt-8" size="lg">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1579693910433-e4c76a59e9aa?q=80&w=600"
                alt="Industrial processing of chicory"
                data-ai-hint="food processing"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* B2B Partner Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 font-headline text-3xl font-bold">Your Strategic Partner in Chicory Supply</h2>
          <p className="mx-auto mb-10 max-w-3xl text-muted-foreground">
            We are dedicated to building long-term partnerships with businesses like yours.
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <Leaf className="h-10 w-10 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Contract Farming</h3>
              <p className="text-muted-foreground">Ensuring consistent supply and quality through direct farmer partnerships.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <Package className="h-10 w-10 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Bulk & Custom Orders</h3>
              <p className="text-muted-foreground">Flexible packaging and order sizes to meet your manufacturing needs.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <Globe className="h-10 w-10 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Global Exports</h3>
              <p className="text-muted-foreground">Experienced in international logistics and documentation for smooth delivery.</p>
            </div>
          </div>
          <div className="mt-12">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/contact?inquiry=bulk">Enquire for Bulk Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
