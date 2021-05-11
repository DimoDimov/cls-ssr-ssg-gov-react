import React from 'react'
import Link from 'next/link'

export default () => {
  return (
    <main>
      <h1>Normal rendering vs SSR vs SSG on NextJS and React Gov components</h1>
      <p>The same example, with 3 different approaches, fetchind data and rendering React Gov component</p>
      <ul>
        <li>
          <Link href='/csr'>
            <a>Client-side rendering example</a>
          </Link>
        </li>
        <li>
          <Link href='/ssr'>
            <a>Server-side rendering example</a>
          </Link>
        </li>
        <li>
          <Link href='/ssg'>
            <a>Static-generated site example</a>
          </Link>
        </li>
      </ul>
    </main>
  )
}
