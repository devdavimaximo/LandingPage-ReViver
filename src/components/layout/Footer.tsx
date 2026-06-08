export function Footer() {
  return (
    <footer
      className="py-8 px-5 sm:px-8 text-center"
      style={{ borderTop: '1px solid rgba(212,175,55,0.12)' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center">
          <img src="/logo.png" alt="ReViver" className="h-6 w-auto" />
        </div>

        <p className="text-xs" style={{ color: '#9a7a80' }}>
          © 2026 ReViver · Todos os direitos reservados
        </p>

        <a
          href="https://reviveroficial.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs no-underline transition-colors"
          style={{ color: '#9a7a80' }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#D4AF37'; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#9a7a80'; }}
        >
          reviveroficial.com.br
        </a>
      </div>
    </footer>
  );
}
