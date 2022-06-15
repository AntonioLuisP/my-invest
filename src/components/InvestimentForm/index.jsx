import { useState } from "react"
import { useInvestiments } from "../../hooks/useInvestiments"
import { ButtonPrimary, ButtonWarning } from "../Button"
import "./styles.css"

export default function InvestimentForm() {
  const [, setInvestiments] = useInvestiments()

  const [codAtivo, setCodAtivo] = useState("")
  const [quantidadeInvested, setQuantidadeInvested] = useState(1)
  const [valorInvested, setValorInvested] = useState(1)

  function handleAddInvestiment(e) {
    e.preventDefault()

    if (
      codAtivo.trim() === "" ||
      codAtivo.length < 2 ||
      quantidadeInvested <= 0 ||
      valorInvested <= 0
    )
      return

    setInvestiments(prevInvests => [
      {
        codAtivo,
        quantidade: quantidadeInvested,
        valor: valorInvested
      },
      ...prevInvests
    ])

    clearForm()
  }

  function clearForm() {
    setCodAtivo("")
    setQuantidadeInvested(1)
    setValorInvested(1)
  }

  function handleCleatInvestiments() {
    setInvestiments([])
  }

  return (
    <form onSubmit={handleAddInvestiment} className="invest-form">
      <div className="invest-form-header">
        <h2 className="invest-form-title">Invista em um Ativo</h2>
        <ButtonWarning
          onClick={handleCleatInvestiments}
        >
          Limpar Investimentos
        </ButtonWarning>
      </div>
      <div className="invest-form-body">
        <div className="row">
          <div className="invest-form-group">
            <label for="">Ativo</label>
            <input
              type="text"
              value={codAtivo}
              onChange={e => setCodAtivo(e.target.value)}
              placeholder="Código do Ativo"
            />
          </div>
          <div className="invest-form-group">
            <label for="">Valor a Investir</label>
            <input
              type="number"
              value={valorInvested}
              onChange={e => setValorInvested(e.target.value)}
              placeholder="Valor"
            />
          </div>
          <div className="invest-form-group">
            <label for="">Quantidade</label>
            <input
              type="number"
              value={quantidadeInvested}
              onChange={e => setQuantidadeInvested(e.target.value)}
              placeholder="Quantidade a comprar"
            />
          </div>
        </div>
        <ButtonPrimary type="submit" className="btn btn-primary">
          Investir
        </ButtonPrimary>
      </div>
    </form>
  )
}
