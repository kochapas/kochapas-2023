import Image from "next/image";
import {
  Header,
  Contact,
  InformationCards,
  Footer
} from "@/components"

export default function Home() {
  return (
    <>
      <Header />
      <Contact />
      <InformationCards />
      <Footer />
    </>
  )
}
