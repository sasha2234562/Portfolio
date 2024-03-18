import { BigPhotoAboutMe } from "../Photo/Big-Photo-About-Me.tsx";
import SmallPhotoAboutMe from "../Photo/Small-Photo-About-Me.tsx";
import {AboutMeHeader} from "./AboutMe.style.ts";
import {TextContent} from "./Text-Content.tsx";
import {TextAboutMe} from "./TextAboutMe.tsx";


export const AboutMe = () => {
  return (
    <AboutMeHeader id={'About'}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '120px',
          width: '55%',
        }}
      >
        <TextContent />
        <BigPhotoAboutMe />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '120px',
          width: '43%',
        }}
      >
        <TextAboutMe />
        <SmallPhotoAboutMe />
      </div>
    </AboutMeHeader>
  );
};
