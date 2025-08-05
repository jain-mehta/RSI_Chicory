
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
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

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
    <div className="mt-12 overflow-x-hidden">
      <div className="grid grid-cols-1 gap-y-8 md:grid-cols-9">
        {processSteps.map((step, index) => {
          const isOdd = index % 2 !== 0;
          const isLast = index === processSteps.length - 1;

          return (
            <div
              key={index}
              className={cn(
                'col-span-1 flex items-center md:col-span-4',
                isOdd ? 'md:col-start-6' : 'md:col-start-1'
              )}
            >
              <Card className="w-full transition-shadow hover:shadow-lg">
                <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                   <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <step.icon className="h-5 w-5" />
                  </span>
                  <CardTitle>{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </div>
          );
        })}

        {/* Desktop-only graphic connectors */}
        <div className="hidden md:col-span-9 md:grid md:grid-cols-9 md:grid-rows-7">
          {processSteps.map((_, index) => {
            if (index >= processSteps.length - 1) return null;
            const isOdd = index % 2 !== 0;
            const row = index + 1;

            return (
              <div
                key={`line-${index}`}
                className={cn(
                  'relative col-span-1 row-span-1',
                  isOdd ? 'col-start-5' : 'col-start-5',
                  `row-start-${row}`
                )}
              >
                <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border" />
                <div className={cn("absolute top-1/2 h-0.5 w-full bg-border", isOdd ? "right-1/2" : "left-1/2")} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
