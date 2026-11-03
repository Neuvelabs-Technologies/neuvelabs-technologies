import ServicePage, { serviceMetadata } from "@/components/pages/ServicePage";

export const metadata = serviceMetadata("data-engineering");

export default function DataEngineeringPage() {
  return <ServicePage slug="data-engineering" />;
}
