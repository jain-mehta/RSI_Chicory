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
import emailjs from 'emailjs-com';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { COUNTRIES } from '@/lib/country-codes';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Lazy load the ReactCountryFlag component
const ReactCountryFlag = dynamic(() => import('react-country-flag'), {
  loading: () => <div className="w-6 h-4 bg-muted animate-pulse rounded" />,
  ssr: false
});

// Create a lazy-loaded flag component
const CountryFlag = ({ countryCode }: { countryCode: string }) => (
  <Suspense fallback={<div className="w-6 h-4 bg-muted animate-pulse rounded" />}>
    <ReactCountryFlag
      countryCode={countryCode}
      svg
      style={{ width: '1.5em', height: '1.5em' }}
    />
  </Suspense>
);

import { products } from '@/lib/products';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Check, ChevronsUpDown } from 'lucide-react';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { ScrollArea } from '../ui/scroll-area';

const formSchema = z.object({
  firstName: z.string().min(1, { message: 'First name is required.' }),
  lastName: z.string().min(1, { message: 'Last name is required.' }),
  company: z.string().min(2, { message: 'Company name is required.' }),
  companyAddress: z.string().min(5, { message: 'Company address is required.' }),
  country: z.string().min(1, { message: 'Country is required.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  countryCode: z.string().optional(),
  phone: z.string().min(1, 'Phone number is required.'),
  productInterest: z.array(z.string()).min(1, { message: 'Please select at least one product.' }),
  expectedQuantity: z.string().min(1, { message: 'Expected quantity is required.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }).max(500),
}).refine(data => (data.phone ? !!data.countryCode : true), {
  message: "Country code is required if phone number is provided.",
  path: ["countryCode"],
});

type ContactFormProps = {
  defaultMessage?: string;
  sourcePage: string;
};

const FormLabelWithAsterisk = ({ children }: { children: React.ReactNode }) => (
  <FormLabel>{children} <span className="text-destructive">*</span></FormLabel>
);

export function ContactForm({ defaultMessage, sourcePage }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      company: '',
      companyAddress: '',
      country: '',
      email: '',
      countryCode: 'IN:+91',
      phone: '',
      productInterest: [],
      expectedQuantity: '',
      message: defaultMessage || '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    const fullPhoneNumber = values.phone && values.countryCode
      ? `${values.countryCode.split(':')[1]}${values.phone}`
      : '';
    const templateParams = {
      firstName: values.firstName,
      lastName: values.lastName,
      company: values.company,
      companyAddress: values.companyAddress,
      country: values.country,
      email: values.email,
      phone: fullPhoneNumber,
      productInterest: values.productInterest.join(', '),
      expectedQuantity: values.expectedQuantity,
      message: values.message,
      sourcePage,
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      );

      toast({
        title: 'Inquiry Sent!',
        description: 'Thank you for your message. Our sales team will get back to you shortly.',
      });

      form.reset();

    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: 'Error',
        description: 'Something went wrong while sending your inquiry. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const productOptions = products.map(p => ({ label: p.name, value: p.slug }));

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        
        {/* --- First & Last Name --- */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabelWithAsterisk>First Name</FormLabelWithAsterisk>
                <FormControl>
                  <Input placeholder="John" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabelWithAsterisk>Last Name</FormLabelWithAsterisk>
                <FormControl>
                  <Input placeholder="Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* --- Company --- */}
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabelWithAsterisk>Company Name</FormLabelWithAsterisk>
              <FormControl>
                <Input placeholder="Global Coffee Corp" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* --- Address & Country --- */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="companyAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabelWithAsterisk>Company Address</FormLabelWithAsterisk>
                <FormControl>
                  <Input placeholder="123 Business Rd, Suite 100, City" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabelWithAsterisk>Country</FormLabelWithAsterisk>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a country" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <ScrollArea className="h-72">
                      {COUNTRIES.map((country) => (
                        <SelectItem key={country.code} value={country.name}>
                          {country.name}
                        </SelectItem>
                      ))}
                    </ScrollArea>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* --- Email & Phone --- */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabelWithAsterisk>Email Address</FormLabelWithAsterisk>
                <FormControl>
                  <Input placeholder="john.doe@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div>
            <FormLabelWithAsterisk>Phone Number</FormLabelWithAsterisk>
            <div className="mt-2 flex gap-2">
              <FormField
                control={form.control}
                name="countryCode"
                render={({ field }) => (
                  <FormItem className="w-auto flex-shrink-0">
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue asChild>
                            <div className="flex items-center gap-2">
                              <CountryFlag countryCode={field.value?.split(':')[0] || 'IN'} />
                              <span>{field.value?.split(':')[1] || '+91'}</span>
                            </div>
                          </SelectValue>
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <ScrollArea className="h-72">
                          {COUNTRIES.map((country) => (
                            <SelectItem 
                              key={`${country.code}:${country.dialCode}`} 
                              value={`${country.code}:${country.dialCode}`}
                            >
                              <div className="flex items-center gap-2">
                                <CountryFlag countryCode={country.code} />
                                <span>{country.dialCode}</span>
                              </div>
                            </SelectItem>
                          ))}
                        </ScrollArea>
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
            <FormMessage>{form.formState.errors.phone?.message || form.formState.errors.countryCode?.message}</FormMessage>
          </div>
        </div>

        {/* --- Products & Quantity --- */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="productInterest"
            render={({ field }) => (
              <FormItem>
                <FormLabelWithAsterisk>Product Interest</FormLabelWithAsterisk>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "w-full justify-between h-auto min-h-10",
                          !field.value?.length && "text-muted-foreground"
                        )}
                      >
                        <div className="flex gap-1 flex-wrap">
                          {field.value?.length > 0
                            ? field.value.map(val => (
                              <Badge variant="secondary" key={val}>
                                {productOptions.find(p => p.value === val)?.label}
                              </Badge>
                            ))
                            : "Select products"}
                        </div>
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
                    <Command>
                      <CommandInput placeholder="Search products..." />
                      <CommandEmpty>No product found.</CommandEmpty>
                      <CommandList>
                        <CommandGroup>
                          {productOptions.map((option) => (
                            <CommandItem
                              value={option.value}
                              key={option.value}
                              onSelect={() => {
                                const currentValue = field.value || [];
                                const isSelected = currentValue.includes(option.value);
                                const newValue = isSelected
                                  ? currentValue.filter((v) => v !== option.value)
                                  : [...currentValue, option.value];
                                field.onChange(newValue);
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  (field.value || []).includes(option.value)
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                              {option.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="expectedQuantity"
            render={({ field }) => (
              <FormItem>
                <FormLabelWithAsterisk>Expected Quantity</FormLabelWithAsterisk>
                <FormControl>
                  <Input placeholder="e.g., 5 Metric Tons, 1000 kg" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* --- Message --- */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabelWithAsterisk>Message</FormLabelWithAsterisk>
              <FormControl>
                <Textarea
                  placeholder="Please describe your inquiry."
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* --- Submit Button --- */}
        <Button type="submit" className="w-full sm:w-auto" disabled={isSubmitting}>
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isSubmitting ? 'Sending...' : 'Send Inquiry'}
        </Button>
      </form>
    </Form>
  );
}
