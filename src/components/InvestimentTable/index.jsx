export default function InvestimentTable({
  investiments,
  onDeleteInvestiment,
  onClearInvestiments
}) {
  return (
    <>
      <button
        onClick={onClearInvestiments}
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
                  onClick={() => onDeleteInvestiment(key)}
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
