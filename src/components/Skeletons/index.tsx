import React from 'react';
import ContentLoader from 'react-content-loader';

const ProfilePicSkeleton = () => (
  <ContentLoader
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="2" ry="2" width="247" height="247" />
  </ContentLoader>
);

interface ContentProps {
  maxWidth: number;
}

const ProfileContentSkeleton = (props: ContentProps) => {
  const { maxWidth } = props;
  const currWidth = maxWidth - 60;
  return (
    <ContentLoader
      speed={2}
      height={200}
      viewBox="0 0 900 200"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="24" y="15" rx="5" ry="5" width="50vw" height="10" />
      <rect x="25" y="45" rx="5" ry="5" width="50vw" height="10" />
      <rect x="25" y="75" rx="5" ry="5" width="50vw" height="10" />
      <rect x="25" y="105" rx="5" ry="5" width="50vw" height="10" />
    </ContentLoader>
  );
};

export { ProfilePicSkeleton, ProfileContentSkeleton };
