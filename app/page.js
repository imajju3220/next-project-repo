import React from 'react'
import { getAllUsers } from '@/utils/features'
import Link from 'next/link';

export const metadata = {
  title: "users",
}

const page = async () => {
  const users = await getAllUsers();
  //console.log('allusers', users);
  return (
    <div>
      {users.map((i) => (
        <Link style={{ display: 'block' }} href={`/user/${i.id}`}>{i.name}</Link>
      ))}
    </div>
  )
}

export default page
