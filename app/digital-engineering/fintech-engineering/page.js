import ServicePage, { serviceMetadata } from "@/components/pages/ServicePage";

export const metadata = serviceMetadata("fintech-engineering");

export default function FintechEngineeringPage() {
  return <ServicePage slug="fintech-engineering" />;
}
