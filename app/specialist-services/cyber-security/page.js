import ServicePage, { serviceMetadata } from "@/components/pages/ServicePage";

export const metadata = serviceMetadata("cyber-security");

export default function CyberSecurityPage() {
  return <ServicePage slug="cyber-security" />;
}
