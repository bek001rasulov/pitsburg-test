import React, {ReactNode} from 'react';
import styles from "./MainLayout.module.scss"
import Header from "@/components/main-layout/header/Header";

const MainLayout = ({children}: { children: ReactNode }) => {
    return (
        <div className={styles.layout}>
            <Header/>
                {children}
        </div>
    );
};

export default MainLayout;