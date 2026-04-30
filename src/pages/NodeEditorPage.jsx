import { nodeEditor, nodeEditorScreenshots } from '../content'

const toPublicUrl = (fileName) =>
  `${import.meta.env.BASE_URL}${fileName.replaceAll(' ', '%20')}`

const menuTreeActions = [
  {
    title: 'Root Menu 表示',
    steps: [
      '`Avatar Root` または `Descriptor` を指定します。',
      '`再解析` を押して Root Menu を取得します。',
      '左側の Menu ツリーに Root Menu が表示されます。',
    ],
  },
  {
    title: 'SubMenu の再帰表示',
    steps: [
      'Root Menu 配下の SubMenu を開きます。',
      'SubMenu の中にある Menu も階層として表示されます。',
      '深い階層もツリー上で追跡できます。',
    ],
  },
  {
    title: 'Menu 検索',
    steps: [
      '`Menu検索` に探したい名前や Parameter を入力します。',
      '一致する Menu Control がツリー上で探しやすくなります。',
      'Preview と同期している場合は、対象 Menu の確認にも使えます。',
    ],
  },
  {
    title: 'Parameter 付き項目のみ表示',
    steps: [
      '`Parameter付きのみ` を有効にします。',
      'Parameter を使用している Control に絞って表示します。',
      'Parameter 参照の確認や設定漏れ確認に使用します。',
    ],
  },
  {
    title: '全展開 / 全折りたたみ',
    steps: [
      '`全展開` で SubMenu を含む階層をまとめて開きます。',
      '`全折りたたみ` でツリーを閉じ、Root 付近から確認し直します。',
      'Menu 数が多い Avatar の確認時に使います。',
    ],
  },
]

const parameterActions = [
  {
    title: 'Expression Parameters 一覧',
    steps: [
      'Avatar Descriptor から Expression Parameters を取得します。',
      '右側の表示で定義済み Parameter を確認します。',
      'Menu Control が参照する Parameter と照合します。',
    ],
  },
  {
    title: 'Parameter 参照確認',
    steps: [
      'Menu ツリーで Control を選択します。',
      'その Control が使用している Parameter を確認します。',
      '未定義 Parameter や未使用 Parameter があれば警告に表示されます。',
    ],
  },
  {
    title: 'Menu Preview との選択同期',
    steps: [
      '`Menu Previewを開く` で Preview Window を開きます。',
      '統合ノードエディタで選択した Menu と Preview 側の表示を同期します。',
      '編集・確認したい Menu を素早く探せます。',
    ],
  },
]

function NodeEditorPage() {
  return (
    <section className="panel">
      <h2>{nodeEditor.title}</h2>
      <p className="intro">
        統合ノードエディタは、左側で Expression Menu 階層を確認し、右側で Expression Parameters と警告・注意項目を確認する Window です。
        Avatar Descriptor を起点に Menu と Parameters の状態をまとめて確認できます。
      </p>

      <h3 className="subhead">開き方</h3>
      <p className="intro">{nodeEditor.menuPath}</p>

      <figure className="media-frame wide-media">
        <img
          src={toPublicUrl('files 586.jpg')}
          alt="統合ノードエディタの仮画像"
          loading="lazy"
        />
        <figcaption>仮画像です。後で実際の統合ノードエディタ Window 画像へ置き換えてください。</figcaption>
      </figure>

      <div className="window-layout">
        <section className="window-column">
          <h3>左: Menu ツリー</h3>
          <p>
            Expression Menu を再帰的に解析し、Root Menu と SubMenu をツリー表示します。検索、絞り込み、全展開、全折りたたみに対応します。
          </p>
          <ul>
            <li>Root Menu 表示</li>
            <li>SubMenu の再帰表示</li>
            <li>Menu 検索</li>
            <li>Parameter 付き項目のみ表示</li>
            <li>全展開 / 全折りたたみ</li>
          </ul>
        </section>

        <section className="window-column">
          <h3>右: Parameters / 警告</h3>
          <p>
            Expression Parameters 一覧と、Menu Control の Parameter 参照、未定義・未使用などの警告を確認します。
          </p>
          <ul>
            <li>Expression Parameters 一覧</li>
            <li>Menu Control が使用している Parameter の確認</li>
            <li>Parameters 定義に存在しない参照の確認</li>
            <li>未使用 Parameter の確認</li>
            <li>Menu Preview との選択同期</li>
          </ul>
        </section>
      </div>

      <h3 className="subhead">Menu ツリーの操作方法</h3>
      <p className="intro">
        左側の Menu ツリーでは、Expression Menu の階層を開きながら目的の Control を探します。
        検索や Parameter 付き項目のみ表示を使うことで、設定確認が必要な Menu を絞り込めます。
      </p>
      <div className="operation-list">
        {menuTreeActions.map((action) => (
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

      <h3 className="subhead">Parameters / 警告の操作方法</h3>
      <p className="intro">
        右側では Expression Parameters の一覧と、Menu Control が参照している Parameter の状態を確認します。
        未定義や未使用などの問題は警告・注意項目として表示されます。
      </p>
      <div className="operation-list">
        {parameterActions.map((action) => (
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

      <h3 className="subhead">参考画像</h3>
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
