import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  background: linear-gradient(-90deg, #7159c1, #ab59c1);
  padding-bottom: 15px;
  /* background: #232129; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      color: #fff;
      padding: 0 15px;
      margin: 0 0 10px;
      height: 44px;
      border: 0;
      border-radius: 4px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #fb6f91;
      margin: 0 0 10px;
      /* align-self: flex-start; */
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #3b9eff;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      font-weight: bold;
      transition: 0.2s;

      &:hover {
        background: ${darken(0.03, '#3b9eff')};
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;
      transition: 0.2s;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
