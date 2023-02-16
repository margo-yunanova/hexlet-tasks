import styles from './App.module.css';
import Button from './radio buttons/Button';
import TableComponent from './table/table';
import { tableInfo } from '../utils/constants';
import Task from './notebook/task';

function App() {


  return (
    <div>
      <h2 className={styles.title}>Solutions using the React Hooks</h2>
      <h3 className={styles.title}>Radio buttons</h3>
      <Button count={7} />
      <h3 className={styles.title}>Table sortable by columns</h3>
      <TableComponent list={tableInfo} />
      <h3 className={styles.title}>Notebook</h3>
      <Task />
    </div>
  );
}

export default App;
