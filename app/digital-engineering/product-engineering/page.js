import ServicePage, { serviceMetadata } from "@/components/pages/ServicePage";

export const metadata = serviceMetadata("product-engineering");

export default function ProductEngineeringPage() {
  return <ServicePage slug="product-engineering" />;
}
