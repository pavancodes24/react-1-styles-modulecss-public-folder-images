import AnotherList from "./components/AnotherList";
import List from "./components/List";
import styles from "./styles.module.css";

export default function App() {
  return (
    <div className={styles.header}>
      <div>Hello world </div>
      <List />
      <div>Another List </div>
      <AnotherList />
    </div>
  );
}
