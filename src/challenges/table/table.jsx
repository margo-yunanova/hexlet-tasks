import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import TableCells from "./table-cells";
import TableRow from "./table-row";
import TableBody from "./table-body";
import TableHead from "./table-head";


const TableComponent = ({ list }) => {
  const [lastClickedTitle, setLastClickedTitle] = useState(null);
  const [arrow, setArrow] = useState(null);
  const [sortedList, setSortedList] = useState(list);

  const sort = (title) => {
    if (title !== lastClickedTitle || arrow === '🠓') {
      setLastClickedTitle(title);
      setArrow('🠑');
      const list = [...sortedList].sort((a, b) => {
        if (a[title] > b[title]) return 1;
        if (a[title] < b[title]) return -1;
        return 0;
      });
      setSortedList(list);
    } else {
      setArrow('🠓');
      const list = [...sortedList].sort((a, b) => {
        if (a[title] < b[title]) return 1;
        if (a[title] > b[title]) return -1;
        return 0;
      });
      setSortedList(list);
    };
  };

  return (
    <Table striped bordered hover>
      <TableHead sortedList={sortedList} sort={sort} arrow={arrow} lastClickedTitle={lastClickedTitle} />
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
