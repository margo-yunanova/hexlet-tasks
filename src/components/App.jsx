import styles from './App.module.css';
import Button from './Button';
import TableComponent from './table/table';
import { tableInfo } from '../utils/constants';

function App() {
  return (
    <div>
      <h2 className={styles.title}>Решение задач по блоку React Hooks</h2>
      <h3 className={styles.title}>Радио кнопки</h3>
      <Button count={7} />
      <h3 className={styles.title}>Таблица с возможностью сортировки по столбцам</h3>
      <TableComponent list={tableInfo} />
    </div>
  );
}

export default App;
