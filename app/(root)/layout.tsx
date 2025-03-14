import type { Metadata } from "next";
import { Header } from '@/shared/components/shared'

export const metadata: Metadata = {
  title: "Next Pizza",
  description: "Generated by create next app", // Для SEO
};

export default function HomeLayout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode
}>) {
  return (
    <>
      <Header />
      <main className='min-h-screen'>
        {children}
        {modal}
      </main>
    </>
  );
}
