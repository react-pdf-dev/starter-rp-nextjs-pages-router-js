import { LazyAppProviders } from "./LazyAppProviders";

export default function RootLayout({ children }) {
  return (
    <>
      <LazyAppProviders licenseKey="your-license-key">
        <main>{children}</main>
      </LazyAppProviders>
    </>
  );
}
