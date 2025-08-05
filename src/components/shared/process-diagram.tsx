
'use client';

import {
  Sprout,
  Users,
  Tractor,
  Hand,
  Wind,
  Flame,
  Package,
  Globe,
  ChevronRight,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const processSteps = [
  {
    icon: Sprout,
    title: 'Seed Selection',
    description: 'High-quality seeds of French lineage are chosen for cultivation.',
  },
  {
    icon: Users,
    title: 'Contract Farming',
    description: 'We partner with local farmers, providing seeds and agricultural guidance.',
  },
  {
    icon: Tractor,
    title: 'Harvesting',
    description: 'Mature chicory roots are carefully harvested at their peak.',
  },
  {
    icon: Hand,
    title: 'Washing & Cubing',
    description: 'Roots are thoroughly washed and precision-cut into uniform cubes.',
  },
  {
    icon: Wind,
    title: 'Drying',
    description: 'The chicory cubes are sun-dried or machine-dried to reduce moisture.',
  },
  {
    icon: Flame,
    title: 'Roasting',
    description: 'Cubes are roasted in advanced machinery to develop rich flavor.',
  },
  {
    icon: Package,
    title: 'Processing & Packaging',
    description: 'Processed into cubes, powder, or liquid and packed for export.',
  },
  {
    icon: Globe,
    title: 'Global Export',
    description: 'Finished products are shipped to our B2B clients worldwide.',
  },
];

export const ProcessDiagram = () => {
  return (
    <div className="mt-12">
      <div className="relative">
        {/* The connecting line - visible on larger screens */}
        <div className="hidden lg:block absolute left-1/2 top-10 h-[calc(100%-5rem)] w-0.5 -translate-x-1/2 bg-border" />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-x-16">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={`relative flex items-center gap-6 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="relative z-10 hidden items-center justify-center lg:flex">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <step.icon className="h-6 w-6" />
                </span>
                {/* Horizontal connector */}
                <div
                  className={`absolute w-8 border-t-2 border-dashed border-border ${
                    index % 2 === 1 ? '-right-4' : '-left-4'
                  }`}
                />
              </div>
              <Card className="w-full transition-shadow hover:shadow-lg">
                <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                   <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary lg:hidden">
                    <step.icon className="h-5 w-5" />
                  </span>
                  <CardTitle>{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
