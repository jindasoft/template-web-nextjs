import Footer from "./footer";

export default function LayoutPage({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <div>{children}
      <Footer />
    </div>
  );
}