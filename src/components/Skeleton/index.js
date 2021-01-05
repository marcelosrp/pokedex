import React from "react";
import * as S from "./styles";

const Skeleton = () => {
  return Array(18)
    .fill()
    .map((_, index) => {
      return (
        <S.SkeletonWrapper key={index}>
          <S.SkeletonThumb />
          <S.SkeletonNumber />
          <S.SkeletonName />
          <S.SkeletonType />
        </S.SkeletonWrapper>
      );
    });
};

export default Skeleton;
