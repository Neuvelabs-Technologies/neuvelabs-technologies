import ServicePage, { serviceMetadata } from "@/components/pages/ServicePage";

export const metadata = serviceMetadata("ai-ml");

export default function AiMlPage() {
  return <ServicePage slug="ai-ml" />;
}
