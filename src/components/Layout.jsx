import { NavLink, Outlet } from 'react-router-dom'

const links = [
  { to: '/', label: '概要' },
  { to: '/features', label: '機能' },
  { to: '/capabilities', label: 'できる事' },
  { to: '/steps', label: '操作方法' },
  { to: '/caution', label: '注意' },
]

function Layout() {
  return (
    <main className="page">
      <header className="hero">
        <p className="eyebrow">Unity Editor Tool Guide</p>
        <h1>VRCExEditor 使用方法</h1>
        <p className="lead">
          Unity Editor 上で、VRChat アバターの Expression Menu / Parameters / FX を統合確認・一部編集するツールです。
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
        <p>Menu / Parameters / FX を横断して、整合性確認と軽量編集を高速化します。</p>
      </footer>
    </main>
  )
}

export default Layout
