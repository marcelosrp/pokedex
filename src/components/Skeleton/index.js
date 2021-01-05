import React from "react";
import * as S from "./styles";

const Skeleton = () => {
  return (
    <S.SkeletonWrapper>
      <S.SkeletonThumb />
      <S.SkeletonNumber />
      <S.SkeletonName />
      <S.SkeletonType />
    </S.SkeletonWrapper>
  );
};

export default Skeleton;
