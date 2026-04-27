import { capabilities } from '../content'

function CapabilitiesPage() {
  return (
    <section className="panel">
      <h2>できる事</h2>
      <ul>
        {capabilities.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  )
}

export default CapabilitiesPage
