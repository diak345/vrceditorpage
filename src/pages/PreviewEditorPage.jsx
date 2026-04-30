import { demoVideos, previewEditor, previewScreenshots } from '../content'

const toPublicUrl = (fileName) =>
  `${import.meta.env.BASE_URL}${fileName.replaceAll(' ', '%20')}`

function PreviewEditorPage() {
  return (
    <section className="panel">
      <h2>{previewEditor.title}</h2>
      <p className="intro">{previewEditor.description}</p>

      <h3 className="subhead">開き方</h3>
      <p className="intro">{previewEditor.menuPath}</p>

      <h3 className="subhead">Preview 機能</h3>
      <ul>
        {previewEditor.previewFeatures.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h3 className="subhead">Menu 編集</h3>
      <ul>
        {previewEditor.editFeatures.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h3 className="subhead">編集時の注意</h3>
      <ul>
        {previewEditor.notes.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className="media-grid">
        {previewScreenshots.map((shot) => (
          <figure className="media-frame" key={shot.file}>
            <img src={toPublicUrl(shot.file)} alt={shot.alt} loading="lazy" />
            <figcaption>{shot.caption}</figcaption>
          </figure>
        ))}
      </div>

      <h3 className="subhead">操作デモ動画</h3>
      <div className="video-grid">
        {demoVideos.map((fileName) => (
          <figure className="media-frame" key={fileName}>
            <video controls preload="metadata" playsInline>
              <source src={toPublicUrl(fileName)} type="video/mp4" />
            </video>
            <figcaption>{fileName}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

export default PreviewEditorPage
