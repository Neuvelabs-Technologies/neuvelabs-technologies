import ServicePage, { serviceMetadata } from "@/components/pages/ServicePage";

export const metadata = serviceMetadata("ai-engineering");

export default function AiEngineeringPage() {
  return <ServicePage slug="ai-engineering" />;
}
