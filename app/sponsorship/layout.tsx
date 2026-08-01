import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sponsorship & Partnership Opportunities | WIE Summit 3.0',
  description: 'Support WIE Summit 3.0 at Kenyatta University. Review our Platinum, Gold, Silver, and Bronze corporate partner packages and download the prospectus.',
};

export default function SponsorshipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
