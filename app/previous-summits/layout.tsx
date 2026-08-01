import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Previous Summits Gallery & Vault | WIE Summit 3.0',
  description: 'View the journey of ESA-WIE Kenyatta University summits. Explore photos, metrics, and participant feedback from WIE Summit 1.0, 2.0, and updates for 3.0.',
};

export default function PreviousSummitsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
