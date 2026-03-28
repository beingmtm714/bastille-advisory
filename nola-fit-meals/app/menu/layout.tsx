import StickyOrderButton from "./StickyOrderButton";

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <StickyOrderButton />
    </>
  );
}
