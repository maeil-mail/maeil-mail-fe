import Image, { StaticImageData } from 'next/image';
import { ReactNode } from 'react';
import {
  userReactionBackground,
  userReactionItemContainer,
  userReactionName,
  userReactionProfile,
  userReactionProfileImage,
} from './userReactionSection.css';

interface UserReactionItemProps {
  thumbnailImg: StaticImageData;
  name: string;
  background: string;
  commentNode: ReactNode;
}

export default function UserReactionItem({
  thumbnailImg,
  name,
  background,
  commentNode,
}: UserReactionItemProps) {
  return (
    <div className={userReactionItemContainer}>
      <div className={userReactionProfile}>
        <Image
          width={60}
          height={60}
          src={thumbnailImg}
          alt=""
          className={userReactionProfileImage}
        />
        <div>
          <div className={userReactionName}>{name}</div>
          <div className={userReactionBackground}>{background}</div>
        </div>
      </div>
      {commentNode}
    </div>
  );
}
