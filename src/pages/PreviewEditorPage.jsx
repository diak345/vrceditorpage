import MediaViewer from '../components/MediaViewer'

function PreviewEditorPage() {
  return (
    <section className="panel">
      <h2>Expression Menu Preview / Menu 編集</h2>
      <p className="intro">
        preview-editor の Window は、左側に `editorbox`、右側に Radial UI が表示される構成です。
        左で Control の編集を行い、右で VRChat に近い Pi / Radial UI として見た目や遷移を確認できます。
      </p>

      <h3 className="subhead">開き方</h3>
      <p className="intro">`Tools/VRChat/Expression Menu Preview`</p>

      <figure className="media-frame wide-media">
        <MediaViewer fileName="VRCExpressionMenuPreview.jpg" alt="Expression Menu Preview の仮画像" />
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
            <li>Menu / Icon をドラッグ&ドロップでsubMenu設定,Icon設定が可能</li>
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
        <article className="operation-card">
          <h4>Control 追加</h4>
          <ol>
            <li>`EditorBox` 側で追加したい Menu を選択します。</li>
            <li>`Control 追加` を押して空の Control を作成します。</li>
            <li>Name / Type / Parameter / Value を設定します。</li>
          </ol>
        </article>

        <article className="operation-card">
          <h4>Control 削除</h4>
          <ol>
            <li>削除したい Control を `EditorBox` で選択します。</li>
            <li>`削除` を押して Control を削除します。</li>
            <li>必要に応じて Preview 側で表示が消えているか確認します。</li>
          </ol>
        </article>

        <article className="operation-card">
          <h4>Control 並べ替え</h4>
          <ol>
            <li>並べ替えたい Control を選択します。</li>
            <li>上下移動ボタン、または並べ替え操作で表示順を変更します。</li>
            <li>Radial UI 側で意図した位置に表示されるか確認します。</li>
          </ol>
        </article>

        <article className="operation-card">
          <h4>Control / Type / Parameter / Value 変更</h4>
          <ol>
            <li>Control / Type / Parameter / Value は `editorbox` のテーブルに表示されます。</li>
            <li>変更したい行のセルを選択し、各テーブル上で値を変更します。</li>
            <li>変更後、右側の Radial UI と警告表示で反映結果を確認します。</li>
          </ol>
          <table className="inline-table">
            <thead>
              <tr>
                <th>項目</th>
                <th>変更内容</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Control</td>
                <td>Control 名を変更します。</td>
              </tr>
              <tr>
                <td>Type</td>
                <td>Button / Toggle / SubMenu などの種類を変更します。</td>
              </tr>
              <tr>
                <td>Parameter</td>
                <td>Control が使用する Parameter 名を変更します。</td>
              </tr>
              <tr>
                <td>Value</td>
                <td>Parameter に渡す値を変更します。(int,floatのみ)</td>
              </tr>
            </tbody>
          </table>
        </article>
      </div>

      <h3 className="subhead">Radial UI の操作方法</h3>
      <p className="intro">
        VRC と同じ Radial UI で、Control の見た目と配置を確認できます。
        SubMenu を選択して階層を移動し、Back / Root 操作で階層を戻れるため、実際のメニュー遷移に近い感覚で確認できます。
      </p>
      <div className="operation-list">
        <article className="operation-card">
          <h4>右クリックでメニュー表示</h4>
          <ol>
            <li>Radial UI 上の Control を右クリックします。</li>
            <li>表示されたメニューから編集、削除、設定変更などの操作を選びます。</li>
            <li>ダミー: 右クリックメニューの項目名は後で実際の表示に合わせて差し替えます。</li>
          </ol>
        </article>

        <article className="operation-card">
          <h4>Menu / Icon をドラッグ&ドロップで設定</h4>
          <ol>
            <li>Project から `VRCExpressionsMenu` または `Texture2D` をドラッグします。</li>
            <li>設定したい Control または Drop 領域にドロップします。</li>
            <li>Menu は SubMenu、Texture2D は Icon として適用されます。</li>
          </ol>
        </article>
      </div>

      <h3 className="subhead">編集時の注意</h3>
      <ul>
        <li>Control 数は VRChat の仕様に合わせて最大 `8` 個までです。</li>
        <li>編集内容はアセットに直接反映されるため、大きな変更前はバックアップやバージョン管理で差分確認できる状態を推奨します。</li>
      </ul>

      <h3 className="subhead">操作動画</h3>

        <figure className="media-frame">
          <figcaption className="media-summary">
            <h3>Radial UI上で操作</h3>
            <p>VRChat に近い Pi / Radial UI で Menu の見た目を確認します。</p>
          </figcaption>
          <MediaViewer fileName="VRCExpressionRadialMenu.mp4" alt="Radial UI 表示動画" />
          <span className="media-note">Radial UI 表示の確認ができます。</span>
        </figure>


                <figure className="media-frame">
          <figcaption className="media-summary">
            <h3>name/Parameter / Value 設定</h3>
            <p>Controlのname,parametor,value,typeを変更できます。</p>
          </figcaption>
          <MediaViewer fileName="addnew-param-values.mp4" alt="Parameter Value 設定動画" />
          <span className="media-note">Parametorが存在しない場合は下のWarningsに表示されます。</span>
        </figure>


        
        <figure className="media-frame">
          <figcaption className="media-summary">
            <h3>順番変更</h3>
            <p>Controlの表示順を変更し、Radial UI 側で確認します。</p>
          </figcaption>
          <MediaViewer fileName="changenumber.mp4" alt="順番変更動画" />
          <span className="media-note">Control の並び替えができます。</span>
        </figure>


                <figure className="media-frame">
          <figcaption className="media-summary">
            <h3>警告表示の確認</h3>
            <p>解析結果に基づく警告・注意項目を確認します。</p>
          </figcaption>
          <MediaViewer fileName="transferwarningview.mp4" alt="警告表示確認動画" />
          <span className="media-note">警告内容をクリックすることで該当のメニューに移動できます。</span>
        </figure>


        <figure className="media-frame">
          <figcaption className="media-summary">
            <h3>Icon,submeneの設定</h3>
            <p>Texture / IconまたはMenuをDrag & Dropで設定できます。</p>
          </figcaption>
          <MediaViewer fileName="seticons.mp4" alt="Icon 設定動画" />
          <span className="media-note">D&DでIconまたはsubMenuを設定できます。</span>
        </figure>



        <figure className="media-frame">
          <figcaption className="media-summary">
            <h3>新規サブメニューの追加</h3>
            <p>右クリックメニューから新規サブメニューを追加します。</p>
          </figcaption>
          <MediaViewer fileName="addnew-menu.mp4" alt="Control 追加動画" />
          <span className="media-note">サブメニューはこのプラグインYumeno/Menu/に追加されます。</span>
        </figure>




        <figure className="media-frame">
          <figcaption className="media-summary">
            <h3>SubMenu作成場所</h3>
            <p>右クリックメニューを使ったSubMenuはyumeno/Menuフォルダーに作成されます。</p>
          </figcaption>
          <MediaViewer fileName="createdmenupath.mp4" alt="Menu 階層作成動画" />
          <span className="media-note">PingボタンからMenuの場所を確認できます。</span>
        </figure>



        <figure className="media-frame">
          <figcaption className="media-summary">
            <h3>iconの削除</h3>
            <p>Radial UI上の右クリック操作で Icon 削除、ping,subMenuの追加ができます。</p>
          </figcaption>
          <MediaViewer fileName="rightclick-removeIcon.mp4" alt="右クリック操作動画" />
          <span className="media-note">右クリック操作でicon削除ができます。</span>
        </figure>

       <figure className="media-frame">
          <figcaption className="media-summary">
            <h3>警告の確認</h3>
            <p>警告がある場合、該当の項目が表示され、クリックすることで該当のメニューに移動できます。</p>
          </figcaption>
          <MediaViewer fileName="addparams-and-check-warning.mp4" alt="Parameter 追加と警告確認動画" />
          <span className="media-note">ボタンクリックで該当項目に移動できます。</span>
        </figure>


        
    </section>
  )
}

export default PreviewEditorPage
