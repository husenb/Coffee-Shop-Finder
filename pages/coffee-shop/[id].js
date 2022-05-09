import React from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';

const CoffeeStore = () => {
    const router=useRouter();
    console.log("Router", router)
  return (
<>
    <div>CoffeeStore {router.query.id}
    </div>
    <Link href="/"> 
     Back To Home
      </Link>
    </>
  )
}

export default CoffeeStore