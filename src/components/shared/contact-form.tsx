
// This component provides a reusable contact form for B2B inquiries.
// It uses react-hook-form for state management and zod for validation.

'use client';

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
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { COUNTRIES } from '@/lib/country-codes';
import ReactCountryFlag from 'react-country-flag';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  company: z.string().min(2, { message: 'Company name is required.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  countryCode: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }).max(500),
});

type ContactFormProps = {
  defaultMessage?: string;
  sourcePage: string;
};

export function ContactForm({ defaultMessage, sourcePage }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      company: '',
      email: '',
      countryCode: '+91',
      phone: '',
      message: defaultMessage || '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // In a real application, you would send this data to a server endpoint.
    // We'll simulate an API call here.
    const fullPhoneNumber = values.phone ? `${values.countryCode} ${values.phone}` : '';
    console.log({ ...values, phone: fullPhoneNumber, sourcePage });
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    toast({
      title: 'Inquiry Sent!',
      description: 'Thank you for your message. Our sales team will get back to you shortly.',
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input placeholder="Global Coffee Corp" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                    <Input placeholder="john.doe@example.com" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />

        <div>
            <FormLabel>Phone Number (Optional)</FormLabel>
            <div className="mt-2 flex gap-2">
                <FormField
                control={form.control}
                name="countryCode"
                render={({ field }) => (
                    <FormItem className="w-28 flex-shrink-0">
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                        <SelectTrigger>
                            <SelectValue placeholder="Code" />
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                        {COUNTRIES.map((country) => (
                            <SelectItem key={country.code} value={country.dialCode}>
                            <div className="flex items-center gap-2">
                                <ReactCountryFlag countryCode={country.code} svg style={{ width: '1.5em', height: '1.5em' }}/>
                                <span>{country.dialCode}</span>
                            </div>
                            </SelectItem>
                        ))}
                        </SelectContent>
                    </Select>
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                    <FormItem className="flex-grow">
                    <FormControl>
                        <Input placeholder="555-123-4567" {...field} />
                    </FormControl>
                    </FormItem>
                )}
                />
            </div>
            <FormMessage>{form.formState.errors.phone?.message}</FormMessage>
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Please describe your inquiry, including product interest and estimated quantity."
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full sm:w-auto" disabled={isSubmitting}>
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isSubmitting ? 'Sending...' : 'Send Inquiry'}
        </Button>
      </form>
    </Form>
  );
}
