import MediaViewer from '../components/MediaViewer'

function NodeEditorPage() {
  return (
    <section className="panel">
      <h2>統合ノードエディタ (Phase 1)</h2>
      <p className="intro">
        統合ノードエディタは、左側で Expression Menu 階層を確認し、右側で Expression Parameters と警告・注意項目を確認する Window です。
        Avatar Descriptor を起点に Menu と Parameters の状態をまとめて確認できます。
      </p>

      <h3 className="subhead">開き方</h3>
      <p className="intro">`Tools/VRChat/統合ノードエディタ (Phase 1)`</p>

      <figure className="media-frame wide-media">
        <MediaViewer fileName="VRC-Node-Editor-window.jpg" alt="統合ノードエディタの仮画像" />
        <figcaption>Avatar RootにVRC AvatarDescriptorが設定されているPrefabを設定してください。</figcaption>
      </figure>

      <div className="window-layout">
        <section className="window-column">
          <h3>左: Menu ツリー</h3>
          <p>
            Expression Menuを解析し、Root Menu と SubMenu をツリー表示します。検索、絞り込み、全展開、全折りたたみに対応します。
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
            Expression Parameters 一覧と、Menu Control の Parameter変更が可能です。また参照、未定義・未使用等ある場合警告を表示します。
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

      <figure className="media-frame">
        <MediaViewer fileName="searchname.mp4" alt="Avatar Root を指定する統合ノードエディタ画面" />
        <figcaption>`Avatar Root` または `Descriptor` を指定して解析対象を選びます。</figcaption>
      </figure>
      <div className="operation-list">
        <article className="operation-card">
          <h4>Root Menu 表示</h4>
          <ol>
            <li>Avatar RootにVRC AvatarDescriptorが設定されているPrefabを設定します。</li>
            <li>VRC AvatarDescriptorのメニューを解析し関連のMenuを取得します。</li>
            <li>左側の Menu ツリーに該当のMenuが表示されます。</li>
          </ol>
        </article>

        <article className="operation-card">
          <h4>SubMenu の再帰表示</h4>
          <ol>
            <li>VRC AvatarDescriptorの設定されてあるメニューからサブメニュー,button等全ての情報を階層別に取得します。</li>
            <li>SubMenu の中にある Menu も階層として表示されます。</li>
            <li>深い階層もツリー上で追跡できます。</li>
          </ol>
        </article>

        <article className="operation-card">
          <h4>Menu 検索</h4>
          <ol>
            <li>`Menu検索` に探したい名前や Parameter を入力します。</li>
            <li>一致する Menu Control がツリー上で探しやすくなります。</li>
            <li>Preview と同期している場合は、対象 Menu の確認にも使えます。</li>
          </ol>
        </article>




        <article className="operation-card">
          <h4>VRCと同じUI(Radial Menu)と同期</h4>
          <ol>
            <li>2つのwindowで選択のメニューが同期されます。</li>
            <li>一方のwindowで選択したメニューが他方のwindowにも反映されます。</li>
            <li>編集・確認したい Menu を素早く探せます。</li>
          </ol>
        </article>
      </div>

      <h3 className="subhead">Parameters / 警告の操作方法</h3>
      <p className="intro">
        右側では Expression Parameters の一覧と、Menu Control が参照している Parameter の状態を確認します。
        未定義や未使用などの問題は警告・注意項目として表示されます。
      </p>
      <div className="operation-list">
        <article className="operation-card">
          <h4>Expression Parameters 一覧</h4>
          <ol>
            <li>Avatar Descriptor から Expression Parameters を取得します。</li>
            <li>右側の表示で定義済み Parameter を確認します。</li>
            <li>Menu Control が参照する Parameter と照合します。</li>
          </ol>
        </article>

        <article className="operation-card">
          <h4>Parameter 参照確認</h4>
          <ol>
            <li>Menu ツリーで Control を選択します。</li>
            <li>その Control が使用している Parameter を確認します。</li>
            <li>未定義 Parameter や未使用 Parameter があれば警告に表示されます。</li>
          </ol>
        </article>


      </div>

      <h3 className="subhead">参考画像</h3>
      <div className="media-grid">
        <figure className="media-frame">
          <MediaViewer fileName="files 583.jpg" alt="統合ノードエディタを開く Unity メニュー" />
          <figcaption>`Tools/VRChat/統合ノードエディタ (Phase 1)` から開きます。</figcaption>
        </figure>

        <figure className="media-frame">
          <MediaViewer fileName="files 585.jpg" alt="Avatar Root を指定する統合ノードエディタ画面" />
          <figcaption>`Avatar Root` または `Descriptor` を指定して解析対象を選びます。</figcaption>
        </figure>

        <figure className="media-frame">
          <MediaViewer fileName="files 586.jpg" alt="Menu 階層と編集パネルを表示した統合ノードエディタ" />
          <figcaption>Menu 階層、Parameters、警告、編集パネルを1画面で確認します。</figcaption>
        </figure>
      </div>

      <h3 className="subhead">操作動画</h3>

        <figure className="media-frame">
          <figcaption className="media-summary">
            <h3>Menu 検索</h3>
            <p>Menu 名で目的の Control を素早く探します。</p>
          </figcaption>
          <MediaViewer fileName="searchname.mp4" alt="Menu 検索動画" />
          <span className="media-note">Menu 名で目的の Control を探して編集することができます。</span>
        </figure>

        <figure className="media-frame">
          <figcaption className="media-summary">
            <h3>Parameter 検索と適用</h3>
            <p>Parameter を検索し、対象 Control の確認や設定に使います。</p>
          </figcaption>
          <MediaViewer fileName="parametor-search-apply.mp4" alt="Parameter 検索と適用動画" />
          <span className="media-note">Parameter の使用箇所を確認し、編集対象を素早く判断できます。</span>
        </figure>

       



    </section>
  )
}

export default NodeEditorPage
