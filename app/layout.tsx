import './globals.css'

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  title: 'Melofy',
  description: "Music app based on Gohar Frangyan's design",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='bg-transparent'>{children}</body>
    </html>
  );
}
