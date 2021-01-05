import styled from "styled-components";

export const SkeletonWrapper = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);
  height: 260px;
  margin: 10px;
  padding: 20px;
  text-align: center;
  width: 160px;
  overflow: hidden;
  position: relative;

  &::before {
    content: "";
    display: block;
    position: absolute;
    left: -150px;
    top: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(
      to right,
      transparent 0%,
      #e8e8e8 50%,
      transparent 100%
    );
    animation: load 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }

  @keyframes load {
    from {
      left: -150px;
    }
    to {
      left: 100%;
    }
  }
`;

export const SkeletonThumb = styled.div`
  background-color: rgba(238, 238, 238, 0.6);
  border-radius: 50%;
  height: 110px;
  margin: 0 auto 10px auto;
  text-align: center;
  width: 110px;
`;

export const SkeletonNumber = styled.span`
  background-color: rgba(238, 238, 238, 0.6);
  border-radius: 10px;
  display: inline-block;
  height: 25px;
  width: 50px;
`;

export const SkeletonName = styled.span`
  background-color: rgba(238, 238, 238, 0.6);
  display: inline-block;
  height: 22px;
  margin: 7px 0;
  width: 100px;
`;

export const SkeletonType = styled.span`
  background-color: rgba(238, 238, 238, 0.6);
  display: inline-block;
  height: 22px;
  width: 80px;
`;
