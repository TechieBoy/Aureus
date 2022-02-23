import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <section className='hero is-fullheight'>
      <div className="hero-head">
        <Navbar></Navbar>
      </div>
      <div className="hero-body">
        <div className="container has-text-centered">
          <p className="title is-size-1 has-text-white">
            Instant <span className="accent">loans</span> on Solana Pay.
          </p>
          <p className="subtitle is-size-3 mt-6">
            Use any token or NFT as collateral.<br /> Fixed Term, Low Interest.
          </p>
        </div>
      </div>
      <div className="hero-foot">
        <div className="container has-text-centered mb-3">
          <span className='svg-text has-text-grey'>BUILT ON</span> <svg className='svg' width="122" height="31" viewBox="0 0 122 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44.0604 16.4405H47.9644C48.5133 16.4405 48.9581 16.8985 48.9581 17.4578C48.9581 18.0219 48.5133 18.4751 47.9644 18.4751H43.256C43.1802 18.4751 43.1093 18.504 43.0572 18.5522L41.6376 19.8009C41.4199 19.9937 41.5524 20.3553 41.8363 20.3553H47.7278C47.7278 20.3553 47.7325 20.3553 47.7325 20.3505C47.7325 20.3457 47.7372 20.3457 47.7372 20.3457C47.8129 20.3505 47.8839 20.3553 47.9596 20.3553C49.5212 20.3553 50.7894 19.0584 50.7894 17.4578C50.7894 15.9391 49.649 14.6905 48.1915 14.5699C48.1915 14.5699 48.1868 14.5699 48.1868 14.5651C48.1868 14.5603 48.1868 14.5603 48.1821 14.5603H43.98C43.431 14.5603 42.9862 14.1023 42.9862 13.543C42.9862 12.9789 43.431 12.5258 43.98 12.5258H48.6789C48.7546 12.5258 48.8303 12.4968 48.8871 12.4438L50.2074 11.1951C50.4156 10.9975 50.2784 10.6455 49.9992 10.6455H44.0604C44.0367 10.6455 44.0084 10.6455 43.9847 10.6455C42.4231 10.6455 41.1549 11.9424 41.1549 13.543C41.1549 15.1436 42.4231 16.4405 43.9847 16.4405C44.0084 16.4405 44.032 16.4405 44.0604 16.4405Z" fill="#868F97"></path><path d="M66.7839 10.6406C66.6135 10.6406 66.4763 10.7804 66.4763 10.9588V20.0418C66.4763 20.2154 66.6135 20.36 66.7839 20.36H73.9293C74.0145 20.36 74.095 20.3214 74.1565 20.2588L75.0508 19.2801C75.2354 19.0776 75.0982 18.7449 74.8237 18.7449H68.5868C68.4165 18.7449 68.2792 18.6051 68.2792 18.4267V10.9539C68.2792 10.7804 68.142 10.6357 67.9717 10.6357H66.7839V10.6406Z" fill="#868F97"></path><path fillRule="evenodd" clipRule="evenodd" d="M55.3417 10.6406C55.3417 10.6454 55.3417 10.6454 55.3417 10.6406C54.4284 10.684 53.6949 11.4313 53.6523 12.3618V18.4702C53.6523 18.4943 53.6523 18.5232 53.6523 18.5473C53.6523 19.5164 54.4 20.307 55.3417 20.3456H61.8247C62.7616 20.3022 63.514 19.5115 63.514 18.5473C63.514 18.5232 63.514 18.4943 63.514 18.4702V12.3666C63.4761 11.4361 62.7427 10.684 61.8294 10.6454H55.3417V10.6406ZM56.5531 12.3666C56.5484 12.3666 56.5484 12.3666 56.5531 12.3666C55.9805 12.3907 55.5215 12.8632 55.4979 13.4514V17.2938C55.4979 17.3083 55.4979 17.3276 55.4979 17.342C55.4979 17.9495 55.9663 18.4509 56.5531 18.475H60.618C61.2048 18.4509 61.6732 17.9495 61.6732 17.342C61.6732 17.3276 61.6732 17.3083 61.6732 17.2938V13.4514C61.6496 12.8632 61.1906 12.3955 60.618 12.3666H56.5531Z" fill="#868F97"></path><path fillRule="evenodd" clipRule="evenodd" d="M85.4379 20.042C85.4379 20.2156 85.5752 20.3602 85.7455 20.3602H86.9569C87.1273 20.3602 87.2645 20.2204 87.2645 20.042V12.5258C87.2645 12.5017 87.2645 12.4728 87.2645 12.4487C87.2645 11.4796 86.5216 10.689 85.5941 10.6504H79.3714C79.3478 10.6504 79.3194 10.6504 79.2957 10.6504C78.3304 10.6504 77.5496 11.4555 77.5496 12.4535C77.5496 12.4776 77.5496 12.5065 77.5496 12.5306V20.0468C77.5496 20.2204 77.6868 20.365 77.8571 20.365H79.0686C79.2389 20.365 79.3761 20.2252 79.3761 20.0468V16.9179C79.3761 16.7443 79.5134 16.5997 79.6837 16.5997H85.1446C85.3149 16.5997 85.4521 16.7395 85.4521 16.9179V20.042H85.4379ZM79.3667 14.8689V13.3068C79.3667 12.6994 79.8446 12.2076 80.4314 12.2076H84.378C84.9647 12.2076 85.4427 12.6994 85.4427 13.3068V14.8689C85.4427 15.0425 85.3054 15.1871 85.1351 15.1871H79.6743C79.5039 15.1871 79.3667 15.0473 79.3667 14.8689Z" fill="#868F97"></path><path fillRule="evenodd" clipRule="evenodd" d="M111.015 20.3601C110.844 20.3601 110.707 20.2203 110.707 20.0419V16.913C110.707 16.7394 110.57 16.5948 110.4 16.5948H104.877C104.707 16.5948 104.57 16.7346 104.57 16.913V20.0419C104.57 20.2155 104.432 20.3601 104.262 20.3601H103.041C102.871 20.3601 102.734 20.2203 102.734 20.0419V12.5258C102.734 12.5017 102.734 12.4727 102.734 12.4486C102.734 11.4555 103.524 10.6455 104.499 10.6455C104.522 10.6455 104.551 10.6455 104.574 10.6455H110.863C111.8 10.6889 112.553 11.4796 112.553 12.4438C112.553 12.4679 112.553 12.4968 112.553 12.5209V20.0371C112.553 20.2107 112.415 20.3553 112.245 20.3553H111.015V20.3601ZM104.57 13.3068V14.8688C104.57 15.0424 104.707 15.187 104.877 15.187H110.4C110.57 15.187 110.707 15.0472 110.707 14.8688V13.3068C110.707 12.6993 110.225 12.2076 109.633 12.2076H105.644C105.048 12.2076 104.57 12.6993 104.57 13.3068Z" fill="#868F97"></path><path d="M91.8261 10.6406C91.916 10.6406 92.0012 10.6792 92.058 10.7515L97.4904 17.3517C97.675 17.5734 98.0299 17.4384 98.0299 17.1444V10.9588C98.0299 10.7853 98.1671 10.6406 98.3375 10.6406H99.5489C99.7193 10.6406 99.8565 10.7804 99.8565 10.9588V20.0419C99.8565 20.2154 99.7193 20.3601 99.5489 20.3601H98.0441C98.0394 20.3601 98.0346 20.3552 98.0346 20.3504C98.0346 20.3456 98.0346 20.3456 98.0299 20.3408L92.5028 13.7888C92.3183 13.5671 91.9634 13.7069 91.9634 13.9961V20.0467C91.9634 20.2203 91.8261 20.3649 91.6558 20.3649H90.4349C90.2645 20.3649 90.1273 20.2251 90.1273 20.0467V10.9588C90.1273 10.7853 90.2645 10.6406 90.4349 10.6406H91.8261Z" fill="#868F97"></path><path d="M12.9848 20.6922C13.1362 20.538 13.3397 20.4512 13.5527 20.4512H33.2618C33.6214 20.4512 33.8013 20.8947 33.5457 21.1502L29.6512 25.118C29.4998 25.2723 29.2963 25.3591 29.0834 25.3591H9.37423C9.01459 25.3591 8.83477 24.9156 9.0903 24.66L12.9848 20.6922Z" fill="#868F97"></path><path d="M12.9848 5.88168C13.1362 5.72741 13.3397 5.64062 13.5527 5.64062H33.2618C33.6214 5.64062 33.8013 6.08417 33.5457 6.33969L29.6512 10.3027C29.4998 10.457 29.2963 10.5437 29.0834 10.5437H9.37423C9.01459 10.5437 8.83477 10.1002 9.0903 9.84467L12.9848 5.88168Z" fill="#868F97"></path><path d="M29.6512 13.2391C29.4998 13.0848 29.2963 12.998 29.0834 12.998H9.37423C9.01459 12.998 8.83477 13.4416 9.0903 13.6971L12.9848 17.6601C13.1362 17.8144 13.3397 17.9012 13.5527 17.9012H33.2618C33.6214 17.9012 33.8013 17.4576 33.5457 17.2021L29.6512 13.2391Z" fill="#868F97"></path></svg>
        </div>
      </div>
    </section>
  )
}

export default Home
