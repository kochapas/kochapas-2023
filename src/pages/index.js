import Head from 'next/head'
import {
  Header,
  Contact,
  InformationCards,
  Footer
} from "@/components"

export default function Home() {
  return (
    <>
      <Head>
        <title>{"Kochapas: Fullstack Developer"}</title>
        <meta name="description" content="A web developer in Tokyo, with a love for ramen. 🍜" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Contact />
      <InformationCards />
      <Footer />
    </>
  )
}
