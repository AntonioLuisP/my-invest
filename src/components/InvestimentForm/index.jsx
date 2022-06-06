import { useState } from "react"

export default function InvestimentForm({ onAddInvestiment }) {
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

    onAddInvestiment({
      codAtivo,
      quantidade: quantidadeInvested,
      valor: valorInvested
    })

    clearForm()
  }

  function clearForm() {
    setCodAtivo("")
    setQuantidadeInvested(1)
    setValorInvested(1)
  }

  return (
    <>
      <h2>Invista em um Ativo</h2>
      <form action="" onSubmit={handleAddInvestiment}>
        <div>
          <label htmlFor="">Ativo</label>
          <input
            type="text"
            className=""
            value={codAtivo}
            onChange={e => setCodAtivo(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">QuantidadeInvested</label>
          <input
            type="number"
            className=""
            value={quantidadeInvested}
            onChange={e => setQuantidadeInvested(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">ValorInvested</label>
          <input
            type="number"
            className=""
            value={valorInvested}
            onChange={e => setValorInvested(e.target.value)}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: "8px",
            backgroundColor: "green",
            color: "white",
            cursor: "pointer"
          }}
        >
          Investir
        </button>
      </form>
    </>
  )
}
