import { cautions } from '../content'

function CautionPage() {
  return (
    <section className="panel caution">
      <h2>注意</h2>
      <ul>
        {cautions.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  )
}

export default CautionPage
