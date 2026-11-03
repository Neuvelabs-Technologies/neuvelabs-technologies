export function formatDate(iso, locale = "en") {
  return new Intl.DateTimeFormat(locale === "ar" ? "ar-AE" : "en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(iso));
}
