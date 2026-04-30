import { nodeEditor, nodeEditorScreenshots } from '../content'

const toPublicUrl = (fileName) =>
  `${import.meta.env.BASE_URL}${fileName.replaceAll(' ', '%20')}`

function NodeEditorPage() {
  return (
    <section className="panel">
      <h2>{nodeEditor.title}</h2>
      <p className="intro">{nodeEditor.description}</p>

      <h3 className="subhead">開き方</h3>
      <p className="intro">{nodeEditor.menuPath}</p>

      <h3 className="subhead">できること</h3>
      <ul>
        {nodeEditor.features.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h3 className="subhead">基本操作</h3>
      <ol>
        {nodeEditor.steps.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>

      <div className="media-grid">
        {nodeEditorScreenshots.map((shot) => (
          <figure className="media-frame" key={shot.file}>
            <img src={toPublicUrl(shot.file)} alt={shot.alt} loading="lazy" />
            <figcaption>{shot.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

export default NodeEditorPage
