import localFont from '@next/font/local'

const HolidayExtrasSans = localFont({
  src: '../public/HolidayExtrasSans/Web/HolidayExtrasSans-Regular.woff2'
})

export default function RootLayout({ children }) {
  return (
    <html className={HolidayExtrasSans.className}>
      <head></head>
      <body>{children}</body>
    </html>
  )
}
