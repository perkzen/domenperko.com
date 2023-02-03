import React, { FC, useEffect, useState } from 'react';
import classes from './About.module.scss';
import { motion, useAnimation } from 'framer-motion';
import { floatTransition, floatVariant } from '../../animations/float';
import Technologies from '../Techonologies/Technologies';
import Image from 'next/image';
import image from '../../../public/pd_square.png';
import { useInView } from 'react-intersection-observer';
import { SiSpotify } from 'react-icons/si';
import Link from 'next/link';

interface NowPlayingResponse {
  album: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
}

const About: FC = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const animation = useAnimation();
  const [nowPlaying, setNowPlaying] = useState<{
    url: string;
    song: string;
    isPlaying: boolean;
  }>({
    url: '#',
    song: 'Nothing',
    isPlaying: false,
  });

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: 'spring',
          bounce: 0.2,
          duration: 2.5,
        },
      });
    }
  }, [animation, inView]);

  useEffect(() => {
    fetch('/api/now-playing').then(async (res) => {
      const { artist, title, songUrl, isPlaying }: NowPlayingResponse =
        await res.json();
      const url = isPlaying ? songUrl : '#';
      const song = isPlaying ? `${artist} - ${title}` : 'Nothing';
      setNowPlaying({ url, song, isPlaying });
    });
  }, []);

  return (
    <div className={classes.Container}>
      <div className={classes.Grid}>
        <div ref={ref} className={classes.ImageContainer}>
          <Image src={image} alt={'image'} width={250} height={250} priority />
          <div>Currently playing</div>
          <span>
            {nowPlaying.isPlaying ? (
              <Link
                className={classes.Spotify}
                href={nowPlaying.url}
                target="_blank"
                rel="noopener noreferrer"
                passHref
              >
                <SiSpotify color={'1ED760'} /> {nowPlaying.song}
              </Link>
            ) : (
              <div className={classes.Spotify}>
                <SiSpotify color={'1ED760'} /> {nowPlaying.song}
              </div>
            )}
          </span>
        </div>
        <motion.div initial={{ x: '200vw' }} animate={animation}>
          <motion.div initial="start" animate="end">
            <motion.h1 variants={floatVariant} transition={floatTransition}>
              About me
            </motion.h1>
            <p>
              Hi, there I&apos;m Domen. I&apos;m a software developer from
              Slovenia. I started programming in 2020, and since then I have
              built a lot of interesting projects, by building them I have added
              a lot of new skills to my repertoire. I have been obsessed with
              the idea of using software to solve practical problems. Software
              engineering is a never ending puzzle that I am passionately
              engaged in solving.
            </p>
          </motion.div>
        </motion.div>
      </div>
      <Technologies />
    </div>
  );
};
export default About;
