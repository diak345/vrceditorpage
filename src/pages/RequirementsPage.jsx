function RequirementsPage() {
  return (
    <section className="panel">
      <h2>非対応・前提条件</h2>
      <p className="intro">導入前に必要な環境と、このドキュメントで扱わない範囲です。</p>

      <h3 className="subhead">前提条件</h3>
      <ul>
        <li>VRChat SDK3 Avatars が導入されていること</li>
        <li>VRC SDK3のみ対応 VRC2は非対応です。</li>
        <li>対象 Avatar に `Avatar Descriptor` が設定されていること</li>
        <li>対象 Avatar に `Expression Menu` が設定されていること</li>
        <li>対象 Avatar に `Expression Parameters` が設定されていること</li>
      </ul>

      <h3 className="subhead">非対応・限定対応</h3>
      <ul>
        <li>Modular Avatarは非対応</li>
        <li>FX Animator 解析</li>
        <li>FX Animator の Layer / State / Transition Condition の取り扱い</li>
        <li>AnimationClip 参照の取り扱い</li>
        <li>Animator Controller の直接編集</li>
        <li>Animator State / Transition の編集</li>
        <li>AnimationClip の内容解析</li>
        <li>Expression Menu / Parameters の完全な自動修復</li>
        <li>Expression Parameters アセットの直接編集</li>
        <li>Play Mode 上での実際の VRChat 動作シミュレーション</li>
        <li>VRChat SDK のアップロード検証と同等のチェック</li>
        <li>すべての予約パラメーター・特殊挙動の完全再現</li>
        <li>Undo / Redo の完全保証が必要な大規模編集</li>
      </ul>
    </section>
  )
}

export default RequirementsPage
