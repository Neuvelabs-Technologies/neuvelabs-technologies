import ServicePage, { serviceMetadata } from "@/components/pages/ServicePage";

export const metadata = serviceMetadata("enterprise-software");

export default function EnterpriseSoftwarePage() {
  return <ServicePage slug="enterprise-software" />;
}
