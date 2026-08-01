import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us & Help Desk | WIE Summit 3.0',
  description: 'Get in touch with the WIE Summit 3.0 organizing committee at Kenyatta University. Submit partnership inquiries, view campus location coordinates, or email us directly.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
