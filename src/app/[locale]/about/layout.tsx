import LayoutPage from "@/core/components/layouts/layout_page";

type Props = Readonly<{
  readonly children: React.ReactNode;
}>;
  
export default function AboutLayout({children}: Props) {
  return <LayoutPage>{children}</LayoutPage>;
}