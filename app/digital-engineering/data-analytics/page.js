import ServicePage, { serviceMetadata } from "@/components/pages/ServicePage";

export const metadata = serviceMetadata("data-analytics");

export default function DataAnalyticsPage() {
  return <ServicePage slug="data-analytics" />;
}
