import Head from "next/head"

export function Index(): JSX.Element {
  return (
    <div className="bg-blue-400 max-w-lg mx-auto my-6 p-3 rounded hover:shadow-lg">
      <Head>
        <title>シメパフェどう？後悔？公式サイト</title>
      </Head>
      <h1 className="text-2xl font-bold">パフェを食べたい</h1>
    </div>
  )
}

export default Index
