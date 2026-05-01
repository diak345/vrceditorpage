import MediaViewer from '../components/MediaViewer'

function HomePage() {
  return (
    <section className="panel">
      <h2>概要</h2>
      <p className="intro">
        `VRCExEditor` は、Unity Editor 上で VRChat アバターの `Expression Menu` と `Expression Parameters` をまとめて確認・一部編集するための Editor 拡張です。
      </p>
      <p className="intro">
        主な目的は、アバターのメニュー構成、使用パラメーター、警告・注意項目を一覧化し、設定漏れや未使用項目を見つけやすくすることです。
      </p>

      <h3 className="subhead">対象フォルダ</h3>
      <p className="intro">`Assets/yumeno/VRCExEditor/Editor`</p>

      <h3 className="subhead">主な Window</h3>
      <ul>
        <li>`Tools/VRChat/統合ノードエディタ (Phase 1)`</li>
        <li>`Tools/VRChat/Expression Menu Preview`</li>
      </ul>

      <figure className="media-frame">
        <MediaViewer
          fileName="toolsmenu.jpg"
          alt="Unity Tools メニューから VRCExEditor の各 Window を開く画面"
        />
        <figcaption>Unity メニューから統合エディタ/Preview にアクセスできます。</figcaption>
      </figure>

      <figure className="media-frame">
        <figcaption className="media-summary">
          <h3>初期設定-1</h3>
          <p>Avatar RootにVRC AvatarDescriptorが設定されているPrefabを設定してください。</p>
        </figcaption>
        <MediaViewer fileName="importprefab.jpg" alt="Prefab をインポートする画面" />
        <span className="media-note">アバターが解析され関連の Parameter が表示されます。</span>
      </figure>

      <figure className="media-frame">
        <figcaption className="media-summary">
          <h3>初期設定-2</h3>
          <p>付随のExpressionMenuPreviewを起動します。</p>
        </figcaption>
        <MediaViewer fileName="firstsetting.mp4" alt="初期設定の操作動画" />
        <span className="media-note">Menu Previeから開くことができます。</span>
      </figure>
    </section>
  )
}

export default HomePage
