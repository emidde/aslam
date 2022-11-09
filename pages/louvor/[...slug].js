import React from 'react'
import client from '../../ApolloClient';
import { gql } from '@apollo/client';
import Link from 'next/link';

const LouvorPage = ({aslam}) => {
  return (
    <div className='container  mt-4'>
      <div className='flex justify-between items-center'>
      <h1 className='font-bold text-3xl'>{aslam.title}</h1>
      <Link className='bg-blue-600 p-2 text-center rounded-lg w-2/12' href="/">
      <button>Voltar</button>
      </Link>
      </div>
      <h2 className='text-gray-400'>{aslam.artista}</h2>
      <div className='mt-6 text-gray-300' dangerouslySetInnerHTML={{__html: aslam.louvor.html}}></div>
    </div>
  )
}

export default LouvorPage;

export async function getStaticPaths(){
  const {data} = await client.query({
    query: gql`
    query {
      aslams {
        slug
      }
    }`
  })
const {aslams} = data;
const paths = aslams.map(aslam => ({
  params: {slug: [aslam.slug]}
}))
console.log(paths)
return {paths, fallback: false}
}

export async function getStaticProps({params}){
  const slug = params.slug[0];
  const {data} = await client.query({
    query: gql`
    query AslamBySlug($slug: String!) {
      aslams (where: { slug : $slug}) {
        title
        artista
        slug
        louvor {
          html
        }
      }
    }`,
    variables: {slug}
  })
const {aslams} = data;
const aslam = aslams[0];
console.log(aslams)
return { props: {aslam}}
}