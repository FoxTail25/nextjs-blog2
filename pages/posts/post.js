import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import { useRouter } from "next/router";
import userController from "../../lib/users";
import test from "../../lib/request";

export async function getServerSideProps() {

    let answerBd = await userController.getUsers()

    return {
        props: {
            answerBd,
        },
    };
}


export default function FirstPost({ answerBd }) {

    console.log(answerBd)

    const router = useRouter()

    let arrPosts = [1, 2, 3, 4, 5]
    let post = arrPosts.includes(+router.query.post)

    async function test222() {
        let answer = await test()
        console.log(answer)
    }

    return (
        <Layout>
            <Head>
                <title>First post</title>
            </Head>
            {post
                ? <h1>Post № {router.query.post}</h1>

                : <h1>Этот пост ещё не написали</h1>
            }
            <h2><Link href="/">back to home</Link></h2>
            <ul>
                {answerBd.map(e => <li key={e.id}>{`${e.name} ${e.surname}`}
                    <button onClick={test222}>
                        del
                    </button>
                </li>)}
            </ul>
        </Layout>
    )
}