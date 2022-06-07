import InvestimentForm from "../InvestimentForm"
import InvestimentTable from "../InvestimentTable"
import { InvestimentsContextProvider } from "../../context/InvestimentsContext"
import styled from "styled-components"

export default function Investiment() {
  return (
    <InvestContainer>
      <InvestimentsContextProvider>
        <InvestimentForm />
        <InvestimentTable />
      </InvestimentsContextProvider>
    </InvestContainer>
  )
}

const InvestContainer = styled.div`
  width: 80rem;
  min-width: 60%;
  height: 100%;
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid #a3b9da;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`
