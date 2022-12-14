import Head from 'next/head'
import Link from 'next/link'
import {GiLion} from 'react-icons/gi'
import {FaSpotify, FaYoutube} from 'react-icons/fa'
import { gql } from '@apollo/client'
import client from '../ApolloClient'
import MyModal from './components/popup'


export default function Home({aslams}) {
console.log(aslams)
  return (
    <div className='container'>

      <Head>
        <title>Célula Aslam</title>
        <meta name="description" content="Seja bem vindo a Célula Aslam" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='flex items-center text-center gap-x-3 mt-6 mb-6' >
      <div>
      <h1 className="text-2xl font-bold">
      Célula Aslam
    </h1>
      </div>
      <div>
      <GiLion size={40} color='lightskyblue' />
      </div>
      </div>
      <div className='mt-4 bg-blue-500 rounded-lg px-4 py-4'>
        <h2 className='text-center font-bold'>Avisos da semana</h2>
      </div>
      <div className='mt-6'>
        <h1 className='text-2xl font-bold'>Louvores</h1>
      </div>
      <div className='mt-4'>
        <div className='aligm-items justify-between'>
          <div >
            <div>
            {aslams.map(({ i, title, slug, artista, spotify, youtube }) => (
                  <div className='mt-6'>
                  <div className='flex items-center justify-between'>
                  <h1>{title}</h1>
                  <div className='flex items-center gap-x-3'>
                    <Link href={`${spotify}`}><FaSpotify color='green' size={20} /></Link>
                    <Link href={`${youtube}`}><FaYoutube color='red' size={20} /></Link>
                  </div>
                  </div>
                  <div className='flex mt-1 items-center gap-x-10'>
                  <small className='block text-gray-500'>{artista}</small>
                  <Link className='block text-white' key={i} href={`/louvor/${slug}`}><small>Ver a letra</small></Link>
                  </div>
                  </div>
                  
                  
                    ))}
            </div>
          </div>
        </div>
      </div>

      <footer className='footer'>
      <div >
        <p className='font-semibold text-gray-400'>Caso queira, dê o seu feedback!</p>
        <small className='text-gray-500'>Não se preocupe, você vai estar anônimo</small>
      </div>
      <form action="" className='mt-4'>
        <input className='p-4 rounded-lg w-full bg-gray-800' type="text" name="" placeholder='Digite aqui' id="" />
        <button className='p-2 bg-blue-500 rounded-lg mt-4 w-2/6'>Enviar</button>
      </form>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  const {data} = await client.query({
    query: gql`
    query {
      aslams {
        title
        artista
        slug
        spotify
        youtube
      }
    }`
  })
const {aslams} = data;
console.log(aslams);
return {
  props: {
    aslams
  }
}
}