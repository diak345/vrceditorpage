import { requirements } from '../content'

function RequirementsPage() {
  return (
    <section className="panel">
      <h2>非対応・前提条件</h2>
      <p className="intro">導入前に必要な環境と、このドキュメントで扱わない範囲です。</p>

      <h3 className="subhead">前提条件</h3>
      <ul>
        {requirements.prerequisites.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h3 className="subhead">非対応・限定対応</h3>
      <ul>
        {requirements.unsupported.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  )
}

export default RequirementsPage
