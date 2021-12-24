import React, { useState, useRef, useEffect } from 'react';
import styles from '../components/AudioPlayer.module.css';
import utilsStyles from '../styles/utils.module.css';
import Image from 'next/image';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { FaPlay, FaPause } from 'react-icons/fa';

const AudioPlayer = ({ data }) => {
	const { episodeNumber, onAirDateTime, title, description, audio, image } =
		data;

	// state
	const [isPlaying, setIsPlaying] = useState(false);
	const [duration, setDuration] = useState(0);
	const [currentTime, setCurrentTime] = useState(0);

	// references
	const audioPlayer = useRef(); // reference our audio component
	const progressBar = useRef(); // reference our progress bar
	const animationRef = useRef(); // reference the animation

	const onLoadedMetadata = () => {
		const seconds = Math.floor(audioPlayer.current.duration);
		setDuration(seconds);
		progressBar.current.max = seconds;
	};

	useEffect(() => {
		onLoadedMetadata();
	}, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

	const calculateTime = (secs) => {
		const minutes = Math.floor(secs / 60);
		const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
		const seconds = Math.floor(secs % 60);
		const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
		return `${returnedMinutes}:${returnedSeconds}`;
	};

	const togglePlayPause = () => {
		const prevValue = isPlaying;
		setIsPlaying(!prevValue);
		if (!prevValue) {
			audioPlayer.current.play();
			animationRef.current = requestAnimationFrame(whilePlaying);
		} else {
			audioPlayer.current.pause();
			cancelAnimationFrame(animationRef.current);
		}
	};

	const changePlayerCurrentTime = () => {
		setCurrentTime(progressBar.current.value);
	};

	const whilePlaying = () => {
		progressBar.current.value = audioPlayer.current.currentTime;
		changePlayerCurrentTime();
		animationRef.current = requestAnimationFrame(whilePlaying);
	};

	const changeRange = () => {
		audioPlayer.current.currentTime = progressBar.current.value;
		changePlayerCurrentTime();
	};

	const backThirty = () => {
		progressBar.current.value = Number(progressBar.current.value) - 30;
		changeRange();
	};

	const forwardThirty = () => {
		progressBar.current.value = Number(progressBar.current.value) + 30;
		changeRange();
	};

	return (
		<div className={styles.audio_player_section_container}>
			<div className={styles.image_wrapper}>
				<Image
					src={image}
					layout="fill"
					objectFit="cover"
					objectPosition="left top"
					alt={title}
				/>
			</div>
			{/* episode_info_section */}
			<div className={styles.episode_info_section}>
				<div className={styles.episode_title}>
					<h3>
						{episodeNumber} {title}
					</h3>
					{/* <h4>-Raid of Zuccati Park-</h4> */}
					<p>{onAirDateTime} On Air</p>
				</div>
				<div className={styles.episode_details}>
					<p>{description}</p>
				</div>
			</div>

			<div className={styles.audioPlayer}>
				<audio
					ref={audioPlayer}
					src={audio}
					preload="metadata"
					onLoadedMetadata={onLoadedMetadata}
				/>
				<div className={styles.audioPlayerPlaybutton}>
					<button className={styles.forwardBackward} onClick={backThirty}>
						<BsArrowLeftShort /> 30
					</button>
					<button onClick={togglePlayPause} className={styles.playPause}>
						{isPlaying ? <FaPause /> : <FaPlay className={styles.play} />}
					</button>
					<button className={styles.forwardBackward} onClick={forwardThirty}>
						30 <BsArrowRightShort />
					</button>
				</div>

				<div className={styles.audioPlayerBar}>
					{/* current time */}
					<div className={styles.currentTime}>{calculateTime(currentTime)}</div>

					{/* progress bar */}
					<input
						type="range"
						className={styles.progressBar}
						defaultValue="0"
						ref={progressBar}
						onChange={changeRange}
					/>

					{/* duration */}
					<div className={styles.duration}>
						{duration && !isNaN(duration) && calculateTime(duration)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AudioPlayer;
