const Table = ({ children, className = "", ...props }) => {
  return (
    <div className="overflow-x-auto">
      <table className={`min-w-full divide-y divide-gray-200 ${className}`} {...props}>
        {children}
      </table>
    </div>
  )
}

const TableHeader = ({ children, ...props }) => {
  return (
    <thead className="table-header" {...props}>
      {children}
    </thead>
  )
}

const TableBody = ({ children, ...props }) => {
  return (
    <tbody className="bg-white divide-y divide-gray-200" {...props}>
      {children}
    </tbody>
  )
}

const TableRow = ({ children, className = "", ...props }) => {
  return (
    <tr className={`hover:bg-gray-50 ${className}`} {...props}>
      {children}
    </tr>
  )
}

const TableHead = ({ children, className = "", ...props }) => {
  return (
    <th
      className={`px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider ${className}`}
      {...props}
    >
      {children}
    </th>
  )
}

const TableCell = ({ children, className = "", ...props }) => {
  return (
    <td className={`table-cell ${className}`} {...props}>
      {children}
    </td>
  )
}

Table.Header = TableHeader
Table.Body = TableBody
Table.Row = TableRow
Table.Head = TableHead
Table.Cell = TableCell

export default Table
