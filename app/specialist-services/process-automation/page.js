import ServicePage, { serviceMetadata } from "@/components/pages/ServicePage";

export const metadata = serviceMetadata("process-automation");

export default function ProcessAutomationPage() {
  return <ServicePage slug="process-automation" />;
}
