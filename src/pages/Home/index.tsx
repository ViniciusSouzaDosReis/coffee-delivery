import { Header } from "../../components/Header";
import { CoffeeList } from "./components/CoffeeList";
import { SectionIntro } from "./components/SectionIntro";

function Home() {
  return (
    <>
      <Header />
      <SectionIntro />
      <CoffeeList />
    </>
  )
}

export { Home }