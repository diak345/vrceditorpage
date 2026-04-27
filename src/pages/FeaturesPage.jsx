import { features } from '../content'

function FeaturesPage() {
  return (
    <section className="panel">
      <h2>機能</h2>
      <ul>
        {features.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  )
}

export default FeaturesPage
