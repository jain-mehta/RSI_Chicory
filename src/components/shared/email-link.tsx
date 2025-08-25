'use client';

import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EmailLinkProps {
    email: string;
    variant?: 'default' | 'outline' | 'link';
    className?: string;
    showIcon?: boolean;
    children?: React.ReactNode;
}

const EmailLink = ({ email, variant = 'default', children, className }: EmailLinkProps) => {
    const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        window.location.href = `mailto:${email}`;
        setTimeout(() => {
            if (document.hasFocus()) {
                window.open(
                    `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`,
                    '_blank'
                );
            }
        }, 500);
    };

    return (
        <Button 
            asChild 
            variant={variant} 
            className={`p-0 h-auto ${className || ''}`}
        >
            <a 
                href={`mailto:${email}`} 
                onClick={handleEmailClick} 
                className="no-underline hover:no-underline  text-muted-foreground "
            >
                {children || `Email: ${email}`}
            </a>
        </Button>
    );
};

export default EmailLink;