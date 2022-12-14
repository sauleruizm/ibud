import { Suspense } from "react";
import Loading from "./dashboard/loading";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <h1>Root Layout</h1>
        <Suspense fallback={<Loading />} />
        {children}
      </body>
    </html>
  );
}