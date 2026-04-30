import { overview, overviewImage } from '../content'

const toPublicUrl = (fileName) =>
  `${import.meta.env.BASE_URL}${fileName.replaceAll(' ', '%20')}`

function HomePage() {
  return (
    <section className="panel">
      <h2>概要</h2>
      <p className="intro">
        {overview.description}
      </p>
      <p className="intro">{overview.purpose}</p>

      <h3 className="subhead">対象フォルダ</h3>
      <p className="intro">{overview.folder}</p>

      <h3 className="subhead">主な Window</h3>
      <ul>
        {overview.windows.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <figure className="media-frame">
        <img src={toPublicUrl(overviewImage.file)} alt={overviewImage.alt} loading="lazy" />
        <figcaption>Unity メニューから統合エディタ/Preview にアクセスできます。</figcaption>
      </figure>
    </section>
  )
}

export default HomePage
