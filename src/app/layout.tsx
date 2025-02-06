import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Billow Properties",
  description: "Just a lil' cute thing",
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}

export default RootLayout
