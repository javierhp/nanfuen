import { useRouter } from 'next/router'
import Layout from '../../components/layout'

export default function Product() {
  const router = useRouter()
  const { pid } = router.query

  return <Layout>
    <p>Product: {pid}</p>
  </Layout>
}
