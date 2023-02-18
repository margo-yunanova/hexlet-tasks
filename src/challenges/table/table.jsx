import React, { useMemo, useState } from 'react';
import { Table } from 'react-bootstrap';
import TableCells from "./table-cells";
import TableRow from "./table-row";
import TableBody from "./table-body";
import TableHead from "./table-head";

const sortList = (sortedList, sortDirection, sortedColumn) => {
  const list = [...sortedList]
  if (sortDirection === '🠑') {
    list.sort((a, b) => {
      if (a[sortedColumn] > b[sortedColumn]) return 1;
      if (a[sortedColumn] < b[sortedColumn]) return -1;
      return 0
    })
  } else {
    list.sort((a, b) => {
      if (a[sortedColumn] < b[sortedColumn]) return 1;
      if (a[sortedColumn] > b[sortedColumn]) return -1;
      return 0
    })
  }
  return list
};



const TableComponent = ({ list }) => {
  const [lastClickedTitle, setLastClickedTitle] = useState(null);
  const [arrow, setArrow] = useState(null);
  const [sortedList, setSortedList] = useState(list);
  const [title, setTitle] = useState('')

  //const sortedList = useMemo(() => sort(list, arrow, lastClickedTitle), [list, arrow, title])


  const sort = (title) => {
    if (title !== lastClickedTitle || arrow === '🠓') {
      setLastClickedTitle(title);
      setArrow('🠑');
      setSortedList(sortList(list, '🠑', title));
    } else {
      setArrow('🠓');
      setSortedList(sortList(list, '🠓', title));
    };
  };

  return (
    <Table striped bordered hover>
      <TableHead sortedList={sortedList} sort={sort} setTitle={setTitle} arrow={arrow} lastClickedTitle={lastClickedTitle} />
      <TableBody>
        {sortedList.map((info, i) => (
          <TableRow key={i}>
            <TableCells info={info} />
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableComponent;
