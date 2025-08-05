
// This client component handles the AI topic generation form.
// It uses a server action to call the Genkit AI flow and displays the results.

'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { generateBlogTopics } from '@/ai/flows/generate-blog-topics';
import { Loader2, Lightbulb } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  industry: z.string().min(3, { message: 'Industry must be at least 3 characters.' }),
  targetAudience: z.string().min(3, { message: 'Target audience must be at least 3 characters.' }),
});

type TopicGeneratorFormProps = {
  dictionary: any;
};

export function TopicGeneratorForm({ dictionary }: TopicGeneratorFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [topics, setTopics] = useState<string[]>([]);
  const { toast } = useToast();
  const t = dictionary.AiTopicGeneratorPage;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      industry: 'Coffee Manufacturing',
      targetAudience: 'Product Development Managers',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setTopics([]);

    try {
      const result = await generateBlogTopics(values);
      setTopics(result.topics);
    } catch (error) {
      console.error('Error generating topics:', error);
      toast({
        title: 'Error',
        description: 'Failed to generate blog topics. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{t.generatorControls}</CardTitle>
          <CardDescription>
            {t.generatorDescription}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="industry"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t.industryLabel}</FormLabel>
                    <FormControl>
                      <Input placeholder={t.industryPlaceholder} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="targetAudience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t.audienceLabel}</FormLabel>
                    <FormControl>
                      <Input placeholder={t.audiencePlaceholder} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full sm:w-auto">
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {isLoading ? t.generatingButton : t.generateButton}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {(isLoading || topics.length > 0) && (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>{t.generatedTopicsTitle}</CardTitle>
            <CardDescription>{t.generatedTopicsDesc}</CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex items-center justify-center py-8">
                <Loader2 className="mr-2 h-8 w-8 animate-spin text-primary" />
                <span className="text-muted-foreground">{t.generatingText}</span>
              </div>
            ) : (
              <ul className="space-y-4">
                {topics.map((topic, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Lightbulb className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      )}
    </>
  );
}
