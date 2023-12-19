import { Pagination } from './components'

export default function Home({
  searchParams,
}: {
  searchParams: { page: string }
}) {
  return (
    <Pagination
      itemCount={27}
      pageSize={5}
      currentPage={parseInt(searchParams.page)}
    />
  )
}
