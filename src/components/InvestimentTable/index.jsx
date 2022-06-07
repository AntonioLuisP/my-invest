import { useInvestiments } from "../../hooks/useInvestiments"

export default function InvestimentTable() {
  const [investiments, setInvestiments] = useInvestiments()

  function handleCleatInvestiments() {
    setInvestiments([])
  }

  function handleDeleteInvestiments(choosedKey) {
    setInvestiments(prevInvest =>
      prevInvest.filter((investiment, key) => key !== choosedKey)
    )
  }

  return (
    <>
      <button
        onClick={handleCleatInvestiments}
        style={{
          padding: "8px",
          backgroundColor: "yellow",
          color: "black",
          cursor: "pointer"
        }}
      >
        Limpar Investimentos
      </button>
      <table>
        <thead>
          <tr>
            <th>Valor</th>
            <th>Código do Ativo</th>
            <th>Quantidade</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {investiments.map((investiment, key) => (
            <tr key={key}>
              <td>{investiment.valor}</td>
              <td>{investiment.codAtivo}</td>
              <td>{investiment.quantidade}</td>
              <td>
                <button
                  onClick={() => handleDeleteInvestiments(key)}
                  style={{
                    padding: "8px",
                    backgroundColor: "red",
                    color: "white",
                    cursor: "pointer"
                  }}
                >
                  Apagar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
