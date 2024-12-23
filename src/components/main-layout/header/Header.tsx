import React from 'react';
import Container from "@/components/ui/Container";
import Link from "next/link";

const Header = () => {
    return (
        <header>
            <Container>
                <Link href={"/"} className={""}>
                    Exclusive
                </Link>
            </Container>
        </header>
    );
};

export default Header;