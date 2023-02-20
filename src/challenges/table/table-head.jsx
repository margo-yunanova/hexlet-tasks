const TableHead = ({ sortedList, changeSortDirection, sortDirection, lastClickedTitle }) => {
  const tableTitle = Object.keys(sortedList[0]);
  const arrow = sortDirection === 'ascending' ? ' 🠑' : ' 🠓';

  return (
    <thead>
      <tr style={{'userSelect': 'none'}}>
        {tableTitle.map((title, i) => (<th key={i} onClick={() => changeSortDirection(title)}>{title}{title === lastClickedTitle && arrow }</th>))}
      </tr>
    </thead>
 );
};

export default TableHead;
