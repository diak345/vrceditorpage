export const features = [
  '統合エディター表示: メニュー `Tools/VRChat/統合ノードエディタ (Phase 1)` から Menu / Parameters / FX を1画面で確認',
  'Menu 階層表示（再帰）: SubMenu を含む構造をツリー表示し、検索・Parameter付き絞り込み・全展開/全折りたたみに対応',
  'FX 解析表示: Layer / State / Transition Condition / Clip 参照を収集して可視化',
  '警告検出: Parameters 未定義参照、未使用 Parameter、Motion 未設定 State を検出',
  'Menu 編集: Control の追加/削除/並べ替え、Name / Type / Parameter / SubMenu / Texture 編集（最大 8）',
  'Expression Menu Preview: メニュー `Tools/VRChat/Expression Menu Preview` の Radial UI で遷移と同期表示',
]

export const capabilities = [
  'Avatar から Menu・Parameter・FX の整合性をまとめて確認',
  '「この Menu がどの Parameter を使うか」を追跡',
  'FX Condition の Parameter 参照漏れを検出',
  'メニュー構成（Control）を直接編集して即時再解析',
  'Preview で実際のメニュー遷移イメージを確認',
]

export const steps = [
  'Unity で対象 Avatar をシーン上に配置し、`VRCAvatarDescriptor` を設定します。',
  '`Tools/VRChat/統合ノードエディタ (Phase 1)` を開きます。',
  '上部の `Avatar Root` または `Descriptor` を指定します。',
  '必要に応じて `再解析` を押して最新状態を取得します。',
  '左パネルのツリーから `Menuを編集` / `編集` を押すと、右パネルで該当 Menu を編集できます。',
  '`Menu Previewを開く` で Preview を開き、選択メニューの表示を確認します。',
  '編集後は `変更を再解析に反映` を押すか、`編集時に自動再解析` を有効にして状態を更新します。',
]

export const cautions = [
  '本ツールは VRChat SDK3 Avatars が有効な環境で動作します。使用条件: `MA_VRCSDK3_AVATARS` または `VRC_SDK_VRCSDK3` が有効。',
  '初期フェーズは主に「解析・可視化・限定編集」を目的としています。',
]
