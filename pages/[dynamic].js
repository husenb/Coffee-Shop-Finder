import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import Head from 'next/head';

const Dynamic = () => {
    const router=useRouter();
    const display= router.query.dynamic
    
  return (
      <>
      <Head>
          <title>
              {display}
          </title>
      </Head>
    <div>This is{display} page</div>
    <br/>
    <Link href="/">Back to HOme </Link>

    </>
  )
}

export default Dynamic