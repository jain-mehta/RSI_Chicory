
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
    <div className="mt-12 w-full">
      <div className="relative wrap overflow-hidden p-10 py-10 h-full">
        {/* The vertical timeline spine */}
        <div className="absolute border-opacity-20 border-border h-full border" style={{left: '50%'}}></div>

        {processSteps.map((step, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={index}
              className={cn(
                "mb-8 flex justify-between items-center w-full",
                !isEven && "flex-row-reverse"
              )}
            >
              <div className="order-1 w-5/12"></div>
              
              <div className="z-20 flex items-center order-1 bg-background shadow-xl w-8 h-8 rounded-full">
                <div className="mx-auto text-primary">{index + 1}</div>
              </div>
              
              <div className="order-1 w-5/12 px-6 py-4">
                 <Card className="w-full transition-shadow hover:shadow-lg">
                    <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <step.icon className="h-5 w-5" />
                    </span>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                    </CardContent>
                </Card>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
