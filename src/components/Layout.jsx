import { NavLink, Outlet } from 'react-router-dom'

const links = [
  { to: '/', label: '概要' },
  { to: '/node-editor', label: '統合ノードエディタ' },
  { to: '/preview-editor', label: 'Expression Menu Preview' },
  { to: '/warnings', label: '警告・注意' },
  { to: '/requirements', label: '非対応・前提条件' },
]

function Layout() {
  return (
    <main className="page">
      <header className="hero">
        <p className="eyebrow">Unity Editor Tool Guide</p>
        <h1>VRCExEditor 使用方法</h1>
        <p className="lead">
          Unity Editor 上で、VRChat アバターの Expression Menu / Parameters を確認・一部編集するツールです。
        </p>
        <div className="chips">
          <span>対象コード: `yumeno/VRCExEditor/Editor`</span>
          <span>VRChat SDK3 Avatars 対応</span>
        </div>
      </header>

      <section className="doc-shell">
        <nav className="side-nav" aria-label="ページナビゲーション">
          <p className="side-title">セクション</p>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => (isActive ? 'side-link active' : 'side-link')}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="content-area">
          <Outlet />
        </div>
      </section>

      <footer className="footer">
        <p>Expression Menu と Parameters の確認、警告検出、軽量編集を支援します。</p>
      </footer>
    </main>
  )
}

export default Layout
