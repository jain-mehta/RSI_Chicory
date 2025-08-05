'use server';

/**
 * @fileOverview AI blog topic generator for B2B audience.
 *
 * - generateBlogTopics - A function that generates blog topics.
 * - GenerateBlogTopicsInput - The input type for the generateBlogTopics function.
 * - GenerateBlogTopicsOutput - The return type for the generateBlogTopics function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateBlogTopicsInputSchema = z.object({
  industry: z.string().describe('The industry to generate blog topics for.'),
  targetAudience: z.string().describe('The target audience for the blog topics.'),
});
export type GenerateBlogTopicsInput = z.infer<typeof GenerateBlogTopicsInputSchema>;

const GenerateBlogTopicsOutputSchema = z.object({
  topics: z.array(z.string()).describe('An array of blog post topics.'),
});
export type GenerateBlogTopicsOutput = z.infer<typeof GenerateBlogTopicsOutputSchema>;

export async function generateBlogTopics(input: GenerateBlogTopicsInput): Promise<GenerateBlogTopicsOutput> {
  return generateBlogTopicsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateBlogTopicsPrompt',
  input: {schema: GenerateBlogTopicsInputSchema},
  output: {schema: GenerateBlogTopicsOutputSchema},
  prompt: `You are a marketing expert specializing in B2B content creation. Generate a list of blog post topics for the following industry and target audience.

Industry: {{{industry}}}
Target Audience: {{{targetAudience}}}

Topics:`,
});

const generateBlogTopicsFlow = ai.defineFlow(
  {
    name: 'generateBlogTopicsFlow',
    inputSchema: GenerateBlogTopicsInputSchema,
    outputSchema: GenerateBlogTopicsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
