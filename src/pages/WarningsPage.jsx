import { warnings } from '../content'

function WarningsPage() {
  return (
    <section className="panel caution">
      <h2>警告・注意</h2>
      <p className="intro">解析結果に基づいて、Menu / Parameters の設定ミスや確認すべき項目を表示します。</p>

      <h3 className="subhead">検出する問題</h3>
      <ul>
        {warnings.detected.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h3 className="subhead">注意事項</h3>
      <ul>
        {warnings.notes.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  )
}

export default WarningsPage
