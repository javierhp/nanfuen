import Link from 'next/link';
import Image from 'next/image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Menu() {
  const products = [1, 2, 3];
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <Image src="/images/logo-iso.svg" className="rounded" alt="Nanfuen" width={60} height={45} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/#home">Home</Nav.Link>
          <Nav.Link href="/about">Acerca de nosotros</Nav.Link>
          <Nav.Link href="/classes">Clases y Talleres</Nav.Link>
          <Nav.Link href="/catalog">Catalogo</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    // <ul>
    //   <li>
    //     <Link href="/">Inicio</Link>
    //   </li>
    //   <li>
    //     <Link href="/about">Acerca de nosotros</Link>
    //   </li>
    //   <li>
    //     <Link href="/classes">Clases y Talleres</Link>
    //   </li>
    //   <li>
    //     <Link href="/catalog">Catalogo</Link>
    //   </li>
    //   {/* <li>
    //     <ul>
    //     {products.map((pid) => (
    //         <li key={pid}>
    //         <Link href={`/products/${encodeURIComponent(pid)}`}>
    //             {pid}
    //         </Link>
    //         </li>
    //     ))}
    //     </ul>
    //   </li> */}
    // </ul>

    // <NavDropdown title="Dropdown" id="basic-nav-dropdown">
    //         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //         <NavDropdown.Item href="#action/3.2">
    //           Another action
    //         </NavDropdown.Item>
    //         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //         <NavDropdown.Divider />
    //         <NavDropdown.Item href="#action/3.4">
    //           Separated link
    //         </NavDropdown.Item>
    //       </NavDropdown>
  )
}
