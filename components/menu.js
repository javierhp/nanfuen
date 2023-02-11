import Link from 'next/link'

export default function Menu() {
  const products = [1,2,3];
  return (
    <ul>
      <li>
        <Link href="/">Inicio</Link>
      </li>
      <li>
        <Link href="/about">Acerca de nosotros</Link>
      </li>
      <li>
        <Link href="/classes">Clases y Talleres</Link>
      </li>
      <li>
        <Link href="/catalog">Catalogo</Link>
      </li>
      {/* <li>
        <ul>
        {products.map((pid) => (
            <li key={pid}>
            <Link href={`/products/${encodeURIComponent(pid)}`}>
                {pid}
            </Link>
            </li>
        ))}
        </ul>
      </li> */}
    </ul>
  )
}
