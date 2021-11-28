import Head from 'next/head'
import styles from '../components/AudioPlayer.module.css'
import { AudioPlayer } from "../components/AudioPlayer"

export default function Home() {
	return (
		<div className={styles.container}>
      <Head>
        <title>Protest Tunes | General Strike</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
			<main className={styles.main}>
        <AudioPlayer />
      </main>
    </div>
  )
}
