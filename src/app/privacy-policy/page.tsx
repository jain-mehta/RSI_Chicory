
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | RSI Chicory',
  description: 'Privacy Policy for RSI Chicory.',
};

export default function PrivacyPolicyPage() {
  
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:py-20">
      <div className="prose lg:prose-xl mx-auto">
        <h1 className="font-headline">Privacy Policy</h1>
        <p><em>Last Updated: July 1, 2025</em></p>

        <h2>1. Introduction</h2>
        <p>
          Welcome to RSI Chicory ("we", "our", "us"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
        </p>

        <h2>2. Information We Collect</h2>
        <p>
          We may collect information about you in a variety of ways. The information we may collect on the Site includes:
        </p>
        <ul>
          <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, company name, shipping address, email address, and telephone number, that you voluntarily give to us when you use the contact form or otherwise contact us.</li>
          <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
        </ul>

        <h2>3. Use of Your Information</h2>
        <p>
          Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
        </p>
        <ul>
            <li>Respond to your product and customer service requests.</li>
            <li>Send you information about our products or services.</li>
            <li>Improve our website and offerings.</li>
            <li>Compile anonymous statistical data and analysis for use internally.</li>
        </ul>

        <h2>4. Disclosure of Your Information</h2>
        <p>
          We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
        </p>

        <h2>5. Security of Your Information</h2>
        <p>
          We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
        </p>

        <h2>6. Contact Us</h2>
        <p>
         If you have questions or comments about this Privacy Policy, please contact us at our company email provided on the contact page.
        </p>
      </div>
    </div>
  );
}
