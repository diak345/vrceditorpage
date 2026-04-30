export const overview = {
  description:
    '`VRCExEditor` は、Unity Editor 上で VRChat アバターの `Expression Menu` と `Expression Parameters` をまとめて確認・一部編集するための Editor 拡張です。',
  purpose:
    '主な目的は、アバターのメニュー構成、使用パラメーター、警告・注意項目を一覧化し、設定漏れや未使用項目を見つけやすくすることです。',
  folder: '`Assets/yumeno/VRCExEditor/Editor`',
  windows: [
    '`Tools/VRChat/統合ノードエディタ (Phase 1)`',
    '`Tools/VRChat/Expression Menu Preview`',
  ],
}

export const nodeEditor = {
  title: '統合ノードエディタ (Phase 1)',
  menuPath: '`Tools/VRChat/統合ノードエディタ (Phase 1)`',
  description:
    'Avatar Descriptor を起点に、Expression Menu 階層、Expression Parameters 一覧、警告・注意項目、Menu 編集パネルを1画面で確認できます。',
  features: [
    'Root Menu 表示',
    'SubMenu の再帰表示',
    'Menu 検索',
    'Parameter 付き項目のみ表示',
    '全展開',
    '全折りたたみ',
    'Expression Parameters 一覧',
    'Menu Control が使用している Parameter の確認',
    'Parameters 定義に存在しない参照の確認',
    '未使用 Parameter の確認',
    'Menu Preview との選択同期',
  ],
  steps: [
    'Unity Editor のメニューから `Tools/VRChat/統合ノードエディタ (Phase 1)` を開きます。',
    '上部で `Avatar Root` または `Descriptor` を指定します。',
    '`Avatar Root` を指定した場合、同じ GameObject 上の `VRCAvatarDescriptor` を自動取得します。',
    '`再解析` ボタンで現在の Avatar Descriptor から Menu / Parameters の情報を取得します。',
    '左側ツリーで Menu 階層を確認し、必要に応じて検索や絞り込みを使います。',
    '右側の `警告 / 注意` で解析結果に基づく問題を確認します。',
  ],
}

export const previewEditor = {
  title: 'Expression Menu Preview / Menu 編集',
  menuPath: '`Tools/VRChat/Expression Menu Preview`',
  description:
    'Expression Menu を VRChat に近い Pi / Radial UI 風に表示し、ビルドせずに見た目と遷移を確認できる Preview ウィンドウです。同じ Window 上で Menu Control の追加・編集・削除も行えます。',
  previewFeatures: [
    'Root Menu 表示',
    'SubMenu 遷移',
    'Back 操作',
    'Root へ戻る',
    'Menu 階層の再取得',
    'Texture2D のドラッグ&ドロップ',
    'VRCExpressionsMenu のドラッグ&ドロップ',
    '右クリックメニュー',
    '警告表示',
    '統合ノードエディタとの選択同期',
  ],
  editFeatures: [
    'Control 追加',
    'Control 削除',
    'Control 並べ替え',
    'Control 名変更',
    'Type 変更',
    'Parameter 名変更',
    'Value 変更',
    'SubMenu 設定',
    'Texture / Icon 設定',
  ],
  notes: [
    'Control 数は VRChat の仕様に合わせて最大 `8` 個までです。',
    '編集内容はアセットに直接反映されるため、大きな変更前はバックアップやバージョン管理で差分確認できる状態を推奨します。',
  ],
}

export const warnings = {
  detected: [
    'Parameters 定義に存在しない参照',
    '未使用 Parameter',
    'SubMenu type だが SubMenu 未設定',
    'Parameter type に対して Value が不正',
    'Expression Parameters が見つからない',
    'Menu の循環参照、または深すぎる再帰参照',
  ],
  notes: [
    'VRChat の予約パラメーターは、未定義警告の対象から除外されます。',
    'このツールは解析・確認・限定編集を目的とした Editor 拡張です。',
    'VRChat SDK 公式の検証処理を置き換えるものではありません。アップロード前には Builder / Validation も必ず確認してください。',
  ],
}

export const requirements = {
  prerequisites: [
    'VRChat SDK3 Avatars が導入されていること',
    'VRC SDK3のみ対応 VRC2は非対応です。',
    '対象 Avatar に `Avatar Descriptor` が設定されていること',
    '対象 Avatar に `Expression Menu` が設定されていること',
    '対象 Avatar に `Expression Parameters` が設定されていること',
  ],
  unsupported: [
    'Modular Avatarは非対応',
    'FX Animator 解析',
    'FX Animator の Layer / State / Transition Condition の取り扱い',
    'AnimationClip 参照の取り扱い',
    'Animator Controller の直接編集',
    'Animator State / Transition の編集',
    'AnimationClip の内容解析',
    'Expression Menu / Parameters の完全な自動修復',
    'Expression Parameters アセットの直接編集',
    'Play Mode 上での実際の VRChat 動作シミュレーション',
    'VRChat SDK のアップロード検証と同等のチェック',
    'すべての予約パラメーター・特殊挙動の完全再現',
    'Undo / Redo の完全保証が必要な大規模編集',
  ],
}

export const overviewImage = {
  file: 'toolsmenu.jpg',
  alt: 'Unity Tools メニューから VRCExEditor の各 Window を開く画面',
}

export const nodeEditorScreenshots = [
  {
    file: 'files 583.jpg',
    alt: '統合ノードエディタを開く Unity メニュー',
    caption: '`Tools/VRChat/統合ノードエディタ (Phase 1)` から開きます。',
  },
  {
    file: 'files 585.jpg',
    alt: 'Avatar Root を指定する統合ノードエディタ画面',
    caption: '`Avatar Root` または `Descriptor` を指定して解析対象を選びます。',
  },
  {
    file: 'files 586.jpg',
    alt: 'Menu 階層と編集パネルを表示した統合ノードエディタ',
    caption: 'Menu 階層、Parameters、警告、編集パネルを1画面で確認します。',
  },
]

export const previewScreenshots = [
  {
    file: 'files 582.jpg',
    alt: 'Expression Menu Preview を開く Unity メニュー',
    caption: '`Tools/VRChat/Expression Menu Preview` から Preview を開けます。',
  },
  {
    file: 'files 588.jpg',
    alt: 'Expression Menu Preview の Radial UI 表示',
    caption: 'VRChat に近い Pi / Radial UI でメニュー表示と遷移を確認できます。',
  },
  {
    file: 'files 587.jpg',
    alt: 'Menu 編集対象を選ぶ統合ノードエディタ画面',
    caption: 'Preview と統合ノードエディタは選択同期します。',
  },
]

export const demoVideos = [
  'files 589.mp4',
  'files 590.mp4',
  'files 591.mp4',
  'files 592.mp4',
  'files 593.mp4',
  'files 594.mp4',
  'files 595.mp4',
  'files 596.mp4',
  'files 597.mp4',
  'files 598.mp4',
  'files 599.mp4',
  'files 600.mp4',
  'files 601.mp4',
  'files 602.mp4',
  'files 603.mp4',
  'files 604.mp4',
]
