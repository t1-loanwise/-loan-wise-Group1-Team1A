import {  useEffect } from "react"
import styles from '../../styles/PortfolioTable.css';


const FooterTable = ({ range, setPage, page, slice }) => {
    useEffect(() => {
        if (slice.length < 1 && page !== 1) {
          setPage(page - 1);
        }
      }, [slice, page, setPage]);
      return (
        <div className={styles.tableFooter}>
          {range.map((el, index) => (
            <button
              key={index}
              className={`${styles.Approved} ${
                page === el ? styles.Approved : styles.Declined
              }`}
              onClick={() => setPage(el)}
            >
              {el}
            </button>
          ))}
        </div>
      );
}

export default FooterTable