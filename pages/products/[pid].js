import { useRouter } from 'next/router'

export default function Product () {
  const router = useRouter()
  const { pid } = router.query

  return <p>Product: {pid}</p>
}
