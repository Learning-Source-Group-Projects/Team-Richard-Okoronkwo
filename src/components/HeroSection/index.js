import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElements';
import { 
    HeroContainer, 
    HeroBg, 
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight 
} from './HeroElements'

const HeroSection = () => {
    const [hover,setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>making online bank easy</HeroH1>
            <HeroP>
                Sign up for this maginificent bank made easy on life choice and understanding, <br></br> get to fill out this online easy sign up to get  $400 in credit towards your next payment.
            </HeroP>
            <HeroBtnWrapper>
                <Button 
                to="signup" 
                onMouseEnter={onHover} 
                onMouseLeave={onHover}
                primary="true"
                dark="true"
                >
                    Get Started {hover ? <ArrowForward /> : <ArrowRight 
                    />}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection