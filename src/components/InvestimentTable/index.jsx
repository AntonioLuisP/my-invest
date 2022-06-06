export default function InvestimentTable({ investiments }) {

  return (
    <table>
      <thead>
        <tr>
          <th>Valor</th>
          <th>Código do Ativo</th>
          <th>Quantidade</th>
        </tr>
      </thead>
      <tbody>
        {investiments.map((investiment, key) => (
          <tr key={investiment.id}>
            <td>{investiment.valor}</td>
            <td>{investiment.codAtivo}</td>
            <td>{investiment.quantidade}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
