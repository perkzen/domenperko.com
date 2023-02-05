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
    song: 'Domen is not listening to Spotify at the moment',
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
      const song = isPlaying
        ? `${artist} - ${title}`
        : 'Domen is not listening to Spotify at the moment';
      setNowPlaying({ url, song, isPlaying });
    });
  }, []);

  return (
    <div className={classes.Container}>
      <div className={classes.Grid}>
        <div ref={ref} className={classes.ImageContainer}>
          <Image src={image} alt={'image'} width={250} height={250} priority />
          <span>
            {nowPlaying.isPlaying ? (
              <Link
                className={classes.Spotify}
                href={nowPlaying.url}
                target="_blank"
                rel="noopener noreferrer"
                passHref
              >
                <div className={classes.SpotifyLogo}>
                  <SiSpotify color={'1ED760'} size={24} />
                </div>
                <div> {nowPlaying.song}</div>
              </Link>
            ) : (
              <div className={classes.Spotify}>
                <SiSpotify color={'1ED760'} size={24} /> {nowPlaying.song}
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
              Slovenia with a passion for creating innovative and practical
              projects. My expertise lies in <span>Full Stack Development</span>{' '}
              and my favorite programming language is <span>Typescript</span>.
            </p>

            <p>
              My journey with coding began in 2020 and I have been constantly
              learning and growing ever since. I&apos;m fond of technologies
              like <span>Typescript, Next.js and TailwindCSS </span>, which I
              believe make development a lot easier and fun. I take pride in
              being able to learn and apply new technologies in a quick and
              effective manner. My goal is to continue to expand my knowledge
              and experience in the industry while delivering high-quality work
              that meets the needs of my clients.
            </p>

            <p>
              When I&apos;m not coding, I enjoy playing video games or working
              out at the gym. I believe that a healthy balance between work and
              leisure is essential for maintaining productivity and creativity.
              I&apos;m always on the lookout for new challenges and
              opportunities to learn and grow as a software developer.
            </p>
          </motion.div>
        </motion.div>
      </div>
      <Technologies />
    </div>
  );
};
export default About;
