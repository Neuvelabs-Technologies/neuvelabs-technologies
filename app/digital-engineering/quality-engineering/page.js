import ServicePage, { serviceMetadata } from "@/components/pages/ServicePage";

export const metadata = serviceMetadata("quality-engineering");

export default function QualityEngineeringPage() {
  return <ServicePage slug="quality-engineering" />;
}
