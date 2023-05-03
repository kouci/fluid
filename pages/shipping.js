import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

const Shipping = () => {

    const router = useRouter();
   useEffect(() => {
    router.push('/login');
  }, []);



  return (
    <div>shipping</div>
  )
}

export default Shipping