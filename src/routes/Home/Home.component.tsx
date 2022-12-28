import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { CharacterData } from '../../types/characters.type'
import { fetchCharacters } from '../../services/marvelApi'

import TableList from '../../components/TableList'

import { TableSortOrder, TableData } from '../../components/TableList'

import { Search, SearchIconWrapper, StyledInputBase } from './Home.styles'
import { Search as SearchIcon } from '@mui/icons-material'
import { useDebounce } from 'hooks/useDebounce'

function Home() {
  const [characters, setCharacters] = useState<CharacterData[]>([])
  const [totalRecords, setTotalRecords] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [order, setOrder] = useState<TableSortOrder>('asc')
  const [orderBy, setOrderBy] = useState<keyof TableData>('name')
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const handleOrder = (order: TableSortOrder) => setOrder(order)
  const handleOrderBy = (orderBy: keyof TableData) => setOrderBy(orderBy)
  const handlePageChange = (page: number) => setPage(page)
  const handlePerPageChange = (perPage: number) => setRowsPerPage(perPage)
  const recordToSkip = page === 0 ? 0 : page * rowsPerPage
  const [search, setSearch] = useState('')

  const debouncedValue = useDebounce<string>(search, 1000)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const getData = async () => {
    try {
      const { data } = await fetchCharacters({
        orderBy: order === 'asc' ? (orderBy as string) : `-${orderBy}`,
        limit: rowsPerPage,
        offset: recordToSkip,
        searchQuey: debouncedValue ?? null,
      })
      setCharacters(data.results)
      setTotalRecords(data.total)
      setLoading(false)
    } catch (err) {
      setError(true)
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [order, orderBy, page, rowsPerPage, recordToSkip, debouncedValue])

  return (
    <Box
      sx={{
        py: 10,
      }}
    >
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          type="search"
          value={search}
          inputProps={{ 'aria-label': 'search' }}
          onChange={handleChange}
        />
      </Search>
      <TableList
        error={error}
        orderBy={orderBy}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageUpdate={handlePageChange}
        onPerPageChange={handlePerPageChange}
        onOrder={handleOrder}
        onOrderBy={handleOrderBy}
        order={order}
        isLoading={loading}
        totalCount={totalRecords}
        rows={characters}
      />
    </Box>
  )
}

export default Home
