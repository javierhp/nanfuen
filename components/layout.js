import Menu from "./menu";

export default function Layout({ children }) {
    return <div>
        <Menu></Menu>
        {children}
    </div>;
}