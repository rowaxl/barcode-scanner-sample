import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Link href="/scan">
          <h3>Start Scan</h3>
        </Link>
      </main>
    </div>
  );
}
