const Layout = ({ children }: { children: any }) => {
    return (
        <>
            <main>
                <section className="glass">{children}</section>
            </main>
            <div className="circle1"></div>
            <div className="circle2"></div>
        </>
    );
};

export default Layout;
