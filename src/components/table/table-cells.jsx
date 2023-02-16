const TableCells = ({ info }) => {
 const keys = Object.keys(info);

 return (
   keys.map((key, i) => <td key={i}>{info[key]}</td>)
 );
};

export default TableCells;