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
        <MediaViewer fileName="files 586.jpg" alt="統合ノードエディタの仮画像" />
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
      <div className="operation-list">
        <article className="operation-card">
          <h4>Root Menu 表示</h4>
          <ol>
            <li>`Avatar Root` または `Descriptor` を指定します。</li>
            <li>`再解析` を押して Root Menu を取得します。</li>
            <li>左側の Menu ツリーに Root Menu が表示されます。</li>
          </ol>
        </article>

        <article className="operation-card">
          <h4>SubMenu の再帰表示</h4>
          <ol>
            <li>Root Menu 配下の SubMenu を開きます。</li>
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
          <h4>Parameter 付き項目のみ表示</h4>
          <ol>
            <li>`Parameter付きのみ` を有効にします。</li>
            <li>Parameter を使用している Control に絞って表示します。</li>
            <li>Parameter 参照の確認や設定漏れ確認に使用します。</li>
          </ol>
        </article>

        <article className="operation-card">
          <h4>全展開 / 全折りたたみ</h4>
          <ol>
            <li>`全展開` で SubMenu を含む階層をまとめて開きます。</li>
            <li>`全折りたたみ` でツリーを閉じ、Root 付近から確認し直します。</li>
            <li>Menu 数が多い Avatar の確認時に使います。</li>
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

        <article className="operation-card">
          <h4>Menu Preview との選択同期</h4>
          <ol>
            <li>`Menu Previewを開く` で Preview Window を開きます。</li>
            <li>統合ノードエディタで選択した Menu と Preview 側の表示を同期します。</li>
            <li>編集・確認したい Menu を素早く探せます。</li>
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
      <div className="video-grid">




        <figure className="media-frame">
          <MediaViewer fileName="searchname.mp4" alt="Menu 検索動画" />
          <figcaption>
            <strong>Menu 検索</strong>
            <span>Menu 名で目的の Control を素早く探します。</span>
          </figcaption>
        </figure>

        <figure className="media-frame">
          <MediaViewer fileName="parametor-search-apply.mp4" alt="Parameter 検索と適用動画" />
          <figcaption>
            <strong>Parameter 検索と適用</strong>
            <span>Parameter を検索し、対象 Control の確認や設定に使います。</span>
          </figcaption>
        </figure>

        <figure className="media-frame">
          <MediaViewer fileName="addparams-and-check-warning.mp4" alt="Parameter 追加と警告確認動画" />
          <figcaption>
            <strong>Parameter 追加と警告確認</strong>
            <span>Parameter の追加後、警告表示で状態を確認します。</span>
          </figcaption>
        </figure>

        <figure className="media-frame">
          <MediaViewer fileName="transferwarningview.mp4" alt="警告表示確認動画" />
          <figcaption>
            <strong>警告表示の確認</strong>
            <span>解析結果に基づく警告・注意項目を確認します。</span>
          </figcaption>
        </figure>
        
      </div>
    </section>
  )
}

export default NodeEditorPage
