import ServicePage, { serviceMetadata } from "@/components/pages/ServicePage";

export const metadata = serviceMetadata("design-engineering");

export default function DesignEngineeringPage() {
  return <ServicePage slug="design-engineering" />;
}
