import ServicePage, { serviceMetadata } from "@/components/pages/ServicePage";

export const metadata = serviceMetadata("integration-engineering");

export default function IntegrationEngineeringPage() {
  return <ServicePage slug="integration-engineering" />;
}
