import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Layout from "../../components/layout";
import { useRouter } from "next/router";

export default function FirstPost() {

const router = useRouter()

let arrPosts = [1,2,3,4,5]
let post = arrPosts.includes(+router.query.post)

console.log("post is : ", post)

    return(
<Layout>
<Head>
    <title>First post</title>
</Head>
 {post
 ? <h1>Post № {router.query.post}</h1>
 : <h1>Этот пост ещё не написали</h1>
 }
     <h2><Link href="/">back to home</Link></h2>
     {/* <h2> Route </h2> */}
</Layout>
    )
}