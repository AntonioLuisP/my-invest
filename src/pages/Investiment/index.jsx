import InvestimentForm from "../../components/InvestimentForm"
import InvestimentCard from "../../components/InvestimentCard"
import { InvestimentsContextProvider } from "../../context/InvestimentsContext"

export default function Investiment() {
  return (
    <InvestimentsContextProvider>
      <InvestimentForm />
      <InvestimentCard />
    </InvestimentsContextProvider>
  )
}

