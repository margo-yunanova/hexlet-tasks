import React, { useMemo, useState } from 'react';
import { Table } from 'react-bootstrap';
import TableCells from "./table-cells";
import TableRow from "./table-row";
import TableBody from "./table-body";
import TableHead from "./table-head";
import { sortList } from "../../utils/constants";

const TableComponent = ({ list }) => {
  const [lastClickedTitle, setLastClickedTitle] = useState(null);
  const [sortDirection, setSortDirection] = useState(null);

  const sortedList = useMemo(() => !sortDirection ? list : sortList(list, sortDirection, lastClickedTitle), [list, sortDirection, lastClickedTitle])

  const changeSortDirection = (title) => {
    if (title !== lastClickedTitle || sortDirection === 'descending') {
      setLastClickedTitle(title);
      setSortDirection('ascending');
    } else {
      setSortDirection('descending');
    };
  };

  return (
    <Table striped bordered hover>
      <TableHead sortedList={sortedList} changeSortDirection={changeSortDirection} sortDirection={sortDirection} lastClickedTitle={lastClickedTitle} />
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
