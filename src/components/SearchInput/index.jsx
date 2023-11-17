import styles from "./header.module.scss";
import SearchIcon from "../icons/search";
import React from "react";

export default function SearchInput(props) {
    return (
        < div className={styles.searchContainer}>
            <SearchIcon
                width={20}
                height={20}
                fill="grey"
                className={styles.searchIcon}
            />
            <form
            >
                <input
                    className={styles.searchInput}
                    placeholder="Busca Titulos y más"
                    {...props}
                />
            </form>
        </div>
    )
}