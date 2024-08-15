import { S } from './Main_Styles'
import Tilt from 'react-parallax-tilt'
import Typewriter from 'typewriter-effect'
import { Icon } from '../../../components/icon/Icon'
import { Button } from './../../../components/Button'
import myPhoto from '../../../assets/images/header/iam1.jpg'

export const MainCenter = () => {
  return (
    <>
      <S.MainCenters>
        {/*прозрачный фон*/}
        <Tilt
          className="background-stripes parallax-effect-glare-scale"
          perspective={500}
          glareEnable={true}
          glareMaxOpacity={0.45}
          scale={1.02}
        >
          <div>
            <S.MainPhoto src={myPhoto} />
          </div>
        </Tilt>
        <div>
          <S.MainItem>
            <h1>
              I am <span>Kenesary</span> Amanbay
            </h1>
            <S.MainText>
              <p>A Web Developer</p>
              <Typewriter
                options={{
                  strings: [
                    'A Web Developer',
                    'A Frontent Developer',
                    'A UI/UX Designer',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </S.MainText>
            <S.MainButtonWrapper>
              <Button>
                See Projects
                <Icon
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  iconId="arrow-right-white"
                />
              </Button>
              <a href="#">Download Resume</a>
            </S.MainButtonWrapper>
          </S.MainItem>
        </div>
      </S.MainCenters>
      <S.MainIconPlus>
        <Icon width="88" height="88" viewBox="0 0 88 88" iconId="plus" />
      </S.MainIconPlus>
      <S.MainIconCircle>
        <Icon width="152" height="152" viewBox="0 0 152 152" iconId="circle" />
      </S.MainIconCircle>
    </>
  )
}
