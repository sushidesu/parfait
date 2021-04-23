import Head from "next/head"
import { Map } from "../components/Map"

export function Index(): JSX.Element {
  return (
    <div className="max-w-lg border-2 mx-auto my-6 p-3 rounded hover:shadow-lg">
      <Head>
        <title>シメパフェどう？後悔？公式サイト</title>
      </Head>
      <h1 className="text-2xl font-bold">パフェを食べたい</h1>
      <Map />
    </div>
  )
}

export default Index
