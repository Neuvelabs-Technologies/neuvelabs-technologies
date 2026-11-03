import ServicePage, { serviceMetadata } from "@/components/pages/ServicePage";

export const metadata = serviceMetadata("cloud-devops");

export default function CloudDevopsPage() {
  return <ServicePage slug="cloud-devops" />;
}
