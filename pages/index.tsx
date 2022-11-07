import ViewHome from "components/views/Home/Home";
import Info from "info";

export function getStaticProps() {
    const data = Info;

    return {
        props: {
            data,
        },
    };
}

export default function Home() {
    const data = Info;
    return <ViewHome data={data} />;
}
