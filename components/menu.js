import Link from 'next/link';
import Image from 'next/image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from './menu.module.css';

export default function Menu() {
  return (
    <Navbar 
      expand="lg" 
      className={`py-3 ${styles.navbar}`}
    >
      <div className="container">
        <Navbar.Brand 
          href="/" 
          style={{ 
            padding: 'var(--space-2)',
            position: 'relative'
          }}
        >
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80px',
            height: '80px',
            background: 'radial-gradient(circle, rgba(76, 175, 80, 0.1) 0%, rgba(0, 0, 0, 0) 70%)',
            borderRadius: '50%',
            zIndex: 0
          }} />
          <Image
            src="/images/logo-iso.svg"
            alt="Nanfuen Bonsai Logo"
            width={60}
            height={45}
            priority
            style={{
              position: 'relative',
              zIndex: 1,
              filter: 'brightness(1.2)'
            }}
          />
        </Navbar.Brand>
        
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav"
          style={{
            border: 'none',
            padding: 'var(--space-2)',
            color: 'var(--color-text)',
            '&:focus': {
              boxShadow: 'none',
              outline: '2px solid var(--color-primary)'
            }
          }} 
        />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav 
            className="ms-auto"
            style={{
              gap: 'var(--space-4)',
              '@media (max-width: 991px)': {
                padding: 'var(--space-4) 0'
              }
            }}
          >
            {[
              { href: "/", label: "Inicio" },
              { href: "/about", label: "Acerca de nosotros" },
              { href: "/shohin", label: "Shohin" },
              { href: "/classes", label: "Clases y Talleres" }
            ].map((link) => (
              <Nav.Link 
                key={link.href}
                href={link.href}
                className={`nav-link ${styles.navLink}`}
              >
                {link.label}
              </Nav.Link>
            ))}
            
            <NavDropdown 
              title="Catálogo" 
              id="basic-nav-dropdown"
              style={{
                color: 'var(--color-text)'
              }}
            >
              <div className={styles.dropdownMenu}>
                {[
                  { href: "/catalog", label: "Todo" },
                  { href: "/catalog/tree", label: "Árboles" },
                  { href: "/catalog/Pot", label: "Macetas" },
                  { href: "/catalog/Tools", label: "Herramientas" }
                ].map((item) => (
                  <NavDropdown.Item 
                    key={item.href}
                    href={item.href}
                    className={styles.dropdownItem}
                  >
                    {item.label}
                  </NavDropdown.Item>
                ))}
              </div>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
