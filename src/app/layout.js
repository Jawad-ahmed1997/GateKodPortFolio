//= Global Styles
import "@/styles/main.scss";
import "@/styles/preloader.css";
import "@/styles/modal-video.css";
import "swiper/css/bundle";
import "react-circular-progressbar/dist/styles.css";


export const metadata = {
  title: 'GateKod',
  description: 'GateKod - Multi-Purpose React.js Next.js Template',
  keywords: ['HTML5', 'Template', 'React','next','ui','ux', 'Multi-Purpose', 'themeforest'],
  // icons: {
  //   icon: "/assets/imgs/logShort.jpeg",
  //   shortcut: "/assets/imgs/logShort.jpeg"
  // },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
