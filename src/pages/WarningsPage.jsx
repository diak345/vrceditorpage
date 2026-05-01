function WarningsPage() {
  return (
    <section className="panel caution">
      <h2>警告・注意</h2>
      <p className="intro">解析結果に基づいて、Menu / Parameters の設定ミスや確認すべき項目を表示します。</p>

      <h3 className="subhead">検出する問題</h3>
      <ul>
        <li>Parameters 定義に存在しない参照</li>
        <li>未使用 Parameter</li>
        <li>SubMenu type だが SubMenu 未設定</li>
        <li>Parameter type に対して Value が不正</li>
        <li>Expression Parameters が見つからない</li>
        <li>Menu の循環参照、または深すぎる再帰参照</li>
      </ul>

      <h3 className="subhead">注意事項</h3>
      <ul>
        <li>VRChat の予約パラメーターは、未定義警告の対象から除外されます。</li>
        <li>このツールは解析・確認・限定編集を目的とした Editor 拡張です。</li>
        <li>VRChat SDK 公式の検証処理を置き換えるものではありません。アップロード前には Builder / Validation も必ず確認してください。</li>
      </ul>
    </section>
  )
}

export default WarningsPage
