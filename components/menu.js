import Link from 'next/link'

export default function Menu() {
  const products = [1,2,3];
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About Us</Link>
      </li>
      <li>
        <Link href="/posts/first-post">Blog Post</Link>
      </li>
      <li>
        <ul>
        {products.map((pid) => (
            <li key={pid}>
            <Link href={`/products/${encodeURIComponent(pid)}`}>
                {pid}
            </Link>
            </li>
        ))}
        </ul>
      </li>
    </ul>
  )
}
