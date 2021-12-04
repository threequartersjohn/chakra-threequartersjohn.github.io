import Head from 'next/head'
import { Info, Layout, Photo } from './components';

export const Home = () => {
    return (
        <>
            <Head>
                <title>João Silva</title>
            </Head>
            <Layout>
                <Photo />
                <Info />
            </Layout>
        </>
    )
}
