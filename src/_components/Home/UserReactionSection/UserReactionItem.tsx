import Image, { StaticImageData } from 'next/image';
import { ReactNode } from 'react';
import {
  userReactionBackground,
  userReactionItemContainer,
  userReactionName,
  userReactionProfile,
} from './userReactionSection.css';

interface UserReactionItemProps {
  thumbnailImg: StaticImageData;
  name: ReactNode;
  background: string;
  commentNode: ReactNode;
}

const PROFILE_IMAGE_WIDTH = 60;

export default function UserReactionItem({
  thumbnailImg,
  name,
  background,
  commentNode,
}: UserReactionItemProps) {
  return (
    <div className={userReactionItemContainer}>
      <div className={userReactionProfile}>
        <Image width={PROFILE_IMAGE_WIDTH} src={thumbnailImg} alt="" />
        <div>
          <div className={userReactionName}>{name}</div>
          <div className={userReactionBackground}>{background}</div>
        </div>
      </div>
      {commentNode}
    </div>
  );
}
