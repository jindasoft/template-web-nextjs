import Footer from "./footer";

type Props = Readonly<{
  readonly children: React.ReactNode;
}>;

export default function LayoutPage({ children }: Props) {
  return (
    <>
      <div>{children}</div>
      <Footer />
    </>
  );
}
