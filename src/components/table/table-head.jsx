const TableHead = ({ sortedList, sort, arrow, lastClickedTitle }) => {
 const tableTitle = Object.keys(sortedList[0]);

 return (
   <thead>
     <tr style={{'userSelect': 'none'}}>
       {tableTitle.map((title, i) => (<th key={i} onClick={() => sort(title)}>{title}{title === lastClickedTitle && ' '+arrow }</th>))}
     </tr>
   </thead>
 );
};

export default TableHead;