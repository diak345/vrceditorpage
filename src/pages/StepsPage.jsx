import { steps } from '../content'

function StepsPage() {
  return (
    <section className="panel">
      <h2>操作方法</h2>
      <ol>
        {steps.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    </section>
  )
}

export default StepsPage
