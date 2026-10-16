type Props = Readonly<{
  readonly children: React.ReactNode;
}>;

// Use for pages that need full-bleed content (e.g. hero images, maps) instead of the constrained Container width.
export default function LayoutFullPage({ children }: Props) {
  return <>{children}</>;
}
