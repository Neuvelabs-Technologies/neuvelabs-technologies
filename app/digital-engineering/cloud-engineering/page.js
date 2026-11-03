import ServicePage, { serviceMetadata } from "@/components/pages/ServicePage";

export const metadata = serviceMetadata("cloud-engineering");

export default function CloudEngineeringPage() {
  return <ServicePage slug="cloud-engineering" />;
}
