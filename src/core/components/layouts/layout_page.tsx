import Container from "./container";

type Props = Readonly<{
  readonly children: React.ReactNode;
}>;

export default function LayoutPage({ children }: Props) {
  return <Container className="mt-8 mb-20">{children}</Container>;
}
