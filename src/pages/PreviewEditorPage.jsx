import { previewEditor } from '../content'

const toPublicUrl = (fileName) =>
  `${import.meta.env.BASE_URL}${fileName.replaceAll(' ', '%20')}`

const editorBoxActions = [
  {
    title: 'Control 追加',
    steps: [
      '`EditorBox` 側で追加したい Menu を選択します。',
      '`Control 追加` を押して空の Control を作成します。',
      'Name / Type / Parameter / Value を設定します。',
    ],
  },
  {
    title: 'Control 削除',
    steps: [
      '削除したい Control を `EditorBox` で選択します。',
      '`削除` を押して Control を削除します。',
      '必要に応じて Preview 側で表示が消えているか確認します。',
    ],
  },
  {
    title: 'Control 並べ替え',
    steps: [
      '並べ替えたい Control を選択します。',
      '上下移動ボタン、または並べ替え操作で表示順を変更します。',
      'Radial UI 側で意図した位置に表示されるか確認します。',
    ],
  },
  {
    title: 'Control / Type / Parameter / Value 変更',
    steps: [
      'Control / Type / Parameter / Value は `editorbox` のテーブルに表示されます。',
      '変更したい行のセルを選択し、各テーブル上で値を変更します。',
      '変更後、右側の Radial UI と警告表示で反映結果を確認します。',
    ],
  },
]

const editorTableRows = [
  { field: 'Control', description: 'Control 名を変更します。' },
  { field: 'Type', description: 'Button / Toggle / SubMenu などの種類を変更します。' },
  { field: 'Parameter', description: 'Control が使用する Parameter 名を変更します。' },
  { field: 'Value', description: 'Parameter に渡す値を変更します。(int,floatのみ)' },
]

const radialActions = [
  {
    title: '右クリックでメニュー表示',
    steps: [
      'Radial UI 上の Control を右クリックします。',
      '表示されたメニューから編集、削除、設定変更などの操作を選びます。',
      'ダミー: 右クリックメニューの項目名は後で実際の表示に合わせて差し替えます。',
    ],
  },
  {
    title: 'Menu / Icon をドラッグ&ドロップで設定',
    steps: [
      'Project から `VRCExpressionsMenu` または `Texture2D` をドラッグします。',
      '設定したい Control または Drop 領域にドロップします。',
      'Menu は SubMenu、Texture2D は Icon として適用されます。',
    ],
  },
]

function PreviewEditorPage() {
  return (
    <section className="panel">
      <h2>{previewEditor.title}</h2>
      <p className="intro">
        preview-editor の Window は、左側に `editorbox`、右側に Radial UI が表示される構成です。
        左で Control の編集を行い、右で VRChat に近い Pi / Radial UI として見た目や遷移を確認できます。
      </p>

      <h3 className="subhead">開き方</h3>
      <p className="intro">{previewEditor.menuPath}</p>

      <figure className="media-frame wide-media">
        <img
          src={toPublicUrl('files 588.jpg')}
          alt="Expression Menu Preview の仮画像"
          loading="lazy"
        />
        <figcaption>仮画像です。後で実際の preview-editor Window 画像へ置き換えてください。</figcaption>
      </figure>

      <div className="window-layout">
        <section className="window-column">
          <h3>左: editorbox</h3>
          <p>
            `editorbox` では、選択中の Menu Control を一覧しながら追加、削除、並べ替え、各項目の編集を行います。
          </p>
          <ul>
            <li>Control 追加</li>
            <li>Control 削除</li>
            <li>Control 並べ替え</li>
            <li>Control / Type / Parameter / Value のテーブル編集</li>
          </ul>
        </section>

        <section className="window-column">
          <h3>右: Radial UI</h3>
          <p>
            右側には VRChat と同じ感覚の Radial UI が表示されます。表示確認、右クリック操作、ドラッグ&ドロップ設定を直感的に行えます。
          </p>
          <ul>
            <li>右クリックでメニュー表示</li>
            <li>Menu / Icon をドラッグ&ドロップで設定可能</li>
            <li>VRC と同じ Radial UI による直感的な操作</li>
          </ul>
        </section>
      </div>

      <h3 className="subhead">editorbox の操作方法</h3>
      <p className="intro">
        editorbox では、選択中の Menu Control をテーブルで確認しながら編集できます。
        Control の追加、削除、並べ替えを行い、Control / Type / Parameter / Value は各テーブル上で直接変更します。
      </p>
      <div className="operation-list">
        {editorBoxActions.map((action) => (
          <article className="operation-card" key={action.title}>
            <h4>{action.title}</h4>
            <ol>
              {action.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            {action.title === 'Control / Type / Parameter / Value 変更' && (
              <table className="inline-table">
                <thead>
                  <tr>
                    <th>項目</th>
                    <th>変更内容</th>
                  </tr>
                </thead>
                <tbody>
                  {editorTableRows.map((row) => (
                    <tr key={row.field}>
                      <td>{row.field}</td>
                      <td>{row.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </article>
        ))}
      </div>

      <h3 className="subhead">Radial UI の操作方法</h3>
      <p className="intro">
        VRC と同じ Radial UI で、Control の見た目と配置を確認できます。
        SubMenu を選択して階層を移動し、Back / Root 操作で階層を戻れるため、実際のメニュー遷移に近い感覚で確認できます。
      </p>
      <div className="operation-list">
        {radialActions.map((action) => (
          <article className="operation-card" key={action.title}>
            <h4>{action.title}</h4>
            <ol>
              {action.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </article>
        ))}
      </div>

      <h3 className="subhead">編集時の注意</h3>
      <ul>
        {previewEditor.notes.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  )
}

export default PreviewEditorPage
