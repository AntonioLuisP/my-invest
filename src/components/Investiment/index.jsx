import InvestimentForm from "../InvestimentForm"
import InvestimentTable from "../InvestimentTable"
import { InvestimentsContextProvider } from "../../context/InvestimentsContext"

export default function Investiment() {
  return (
    <InvestimentsContextProvider>
      <InvestimentForm />
      <InvestimentTable />
    </InvestimentsContextProvider>
  )
}
