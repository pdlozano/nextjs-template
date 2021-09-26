import Head from "next/head";
import styles from "./styles/MainComponent.module.css";

type MainProps = {
    children: Array<JSX.Element> | JSX.Element;
    title?: string;
};

function MainComponent(props: MainProps) {
    return (
        <div className={styles.container}>
            <Head>
                <title>{props.title || "Home"}</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta charSet="UTF-8" />
                <link
                    rel="stylesheet"
                    href="https://fonts.xz.style/serve/inter.css"
                />
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/@exampledev/new.css@1.1.2/new.min.css"
                />
            </Head>

            {props.children}
        </div>
    );
}

export default MainComponent;
