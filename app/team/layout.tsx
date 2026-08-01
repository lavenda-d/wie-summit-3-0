import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Organizing Committee & Team | WIE Summit 3.0',
  description: 'Meet the ESA-WIE Kenyatta University leadership team and student coordinators behind WIE Summit 3.0. Learn about chairperson Lavenda Shipichira and volunteer openings.',
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
