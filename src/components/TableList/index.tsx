import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Paper,
  Avatar,
  Fab,
  Typography,
  Skeleton,
  Stack,
} from '@mui/material'
import { CharacterData } from '../../types/characters.type'
import { visuallyHidden } from '@mui/utils'
import Visibility from '@mui/icons-material/Visibility'
import { formatDate } from 'utils/formatDate'
import { Error as ErrorIcon } from '@mui/icons-material'
import SearchOffIcon from '@mui/icons-material/SearchOff'

export interface TableData {
  name: string
  modified: string
  description: string
  thumbnailUrl: string
  actions: string
}

export type TableSortOrder = 'asc' | 'desc'

interface HeadCell {
  disablePadding: boolean
  id: keyof TableData
  label: string
  numeric: boolean
  sort: boolean
}

const headCells: readonly HeadCell[] = [
  {
    id: 'thumbnailUrl',
    numeric: false,
    disablePadding: false,
    label: 'Thumbnail',
    sort: false,
  },
  {
    id: 'modified',
    numeric: false,
    disablePadding: false,
    label: 'Modified Since',
    sort: true,
  },
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Name',
    sort: true,
  },
  {
    id: 'description',
    numeric: false,
    disablePadding: false,
    label: 'Description',
    sort: false,
  },
  {
    id: 'actions',
    numeric: false,
    disablePadding: false,
    label: 'Actions',
    sort: false,
  },
]

interface EnhancedTableProps {
  numSelected?: number
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof TableData
  ) => void
  order: TableSortOrder
  orderBy: string
  rowCount?: number
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { order, orderBy, onRequestSort } = props
  const createSortHandler =
    (property: keyof TableData) => (event: React.MouseEvent<unknown>) => {
      if (property === 'actions') {
        return
      }
      onRequestSort(event, property)
    }

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.sort ? (
              <>
                <TableSortLabel
                  active={orderBy === headCell.id}
                  direction={orderBy === headCell.id ? order : 'asc'}
                  onClick={createSortHandler(headCell.id)}
                >
                  {headCell.label}
                  {orderBy === headCell.id ? (
                    <Box component="span" sx={visuallyHidden}>
                      {order === 'desc'
                        ? 'sorted descending'
                        : 'sorted ascending'}
                    </Box>
                  ) : null}
                </TableSortLabel>
              </>
            ) : (
              <Box onClick={createSortHandler('actions')}>{headCell.label}</Box>
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

interface TableProps {
  rows: CharacterData[]
  error: boolean
  page: number
  rowsPerPage: number
  totalCount: number
  isLoading: boolean
  order: TableSortOrder
  orderBy: keyof TableData
  onOrder: (order: TableSortOrder) => void
  onOrderBy: (orderBy: keyof TableData) => void
  onPageUpdate: (page: number) => void
  onPerPageChange: (perPage: number) => void
}

export default function EnhancedTable({
  rows,
  error,
  totalCount,
  isLoading,
  order,
  orderBy,
  onOrder,
  onOrderBy,
  rowsPerPage,
  onPageUpdate,
  onPerPageChange,
  page,
}: TableProps) {
  // const [page, setPage] = useState(0)
  // const [rowsPerPage, setRowsPerPage] = useState(10)

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof TableData
  ) => {
    const isAsc = orderBy === property && order === 'asc'
    onOrder(isAsc ? 'desc' : 'asc')
    onOrderBy(property)
  }

  const handleChangePage = (event: unknown, newPage: number) => {
    onPageUpdate(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    onPerPageChange(parseInt(event.target.value, 10))
    onPageUpdate(0)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table
            size="small"
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={totalCount}
            />
            <TableBody>
              {isLoading && (
                <>
                  {[...Array(rowsPerPage)].map((_, i) => (
                    <TableRow key={i}>
                      <TableCell align="right">
                        <Skeleton variant="circular" width={36} height={36} />
                      </TableCell>
                      <TableCell align="right">
                        <Skeleton animation="wave" />
                      </TableCell>
                      <TableCell align="right">
                        <Skeleton animation="wave" />
                      </TableCell>
                      <TableCell align="right">
                        <Skeleton animation="wave" />
                      </TableCell>
                      <TableCell align="right">
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                          }}
                        >
                          <Skeleton variant="circular" width={36} height={36} />
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </>
              )}
              {!isLoading &&
                !error &&
                totalCount > 0 &&
                rows.map((row, index) => {
                  return (
                    <TableRow hover role="checkbox" key={row.id}>
                      <TableCell align="right">
                        <Avatar
                          alt="Remy Sharp"
                          src={`${row.thumbnail.path}.${row.thumbnail.extension}`}
                          sx={{ width: 36, height: 36 }}
                        />
                      </TableCell>
                      <TableCell padding="none">
                        {formatDate(row.modified)}
                      </TableCell>
                      <TableCell padding="none">{row.name}</TableCell>
                      <TableCell
                        sx={{
                          maxWidth: 200,
                        }}
                        align="left"
                      >
                        <Typography
                          variant="body2"
                          title={row.description}
                          noWrap
                        >
                          {row.description ? row.description : '----'}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Fab
                          title="click for detail"
                          sx={{
                            height: 36,
                            width: 36,
                            '> svg': {
                              height: '0.9rem',
                              width: '0.9rem',
                            },
                          }}
                          href={`detail/${row.id}`}
                          size="small"
                          color="info"
                        >
                          <Visibility />
                        </Fab>
                      </TableCell>
                    </TableRow>
                  )
                })}
              {rows.length === 0 && totalCount === 0 && (
                <TableRow>
                  <TableCell colSpan={5}>
                    <Stack
                      sx={{
                        color: 'info.main',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 2,
                        minHeight: '50vh',
                      }}
                    >
                      <SearchOffIcon
                        sx={{
                          height: 48,
                          width: 48,
                        }}
                      />
                      <Typography mt={2} variant="body1">
                        Nothing to display. Please update the search query
                      </Typography>
                    </Stack>
                  </TableCell>
                </TableRow>
              )}
              {error && (
                <TableRow>
                  <TableCell colSpan={5}>
                    <Stack
                      sx={{
                        color: 'error.main',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 2,
                        minHeight: '50vh',
                      }}
                    >
                      <ErrorIcon
                        sx={{
                          height: 48,
                          width: 48,
                        }}
                      />
                      <Typography mt={2} variant="body1">
                        Something went wrong. Please try again later
                      </Typography>
                    </Stack>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50]}
          component="div"
          count={totalCount}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  )
}
