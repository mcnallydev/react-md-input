import styled, { keyframes } from 'styled-components';

const inputHighlighter = keyframes`
  from {
    background:transparent;
  }
  to 	{
    width:0;
    background:transparent;
  }
`;

export const Container = styled.div`
  padding: 15px 0;
  margin: 10px 0;
`;

export const Group = styled.div`
  position: relative;
`;

export const Label = styled.label`
  color: #757575;
  font-size: 14px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 0;
  top: 2px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
`;

export const Bar = styled.span`
  position: relative;
  display:block;
  width:100%;

  &:before {
    content: '';
    height: 2px;
    width: 0;
    bottom: 0;
    position: absolute;
    background: #4285f4;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
    left: 50%;
  }

  &:after {
    content: '';
    height: 2px;
    width: 0;
    bottom: 0;
    position: absolute;
    background: #4285f4;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
    right: 50%;
  }
`;

export const InputTag = styled.input`
  font-size: 12px;
  padding: 5px 0;
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid #e0e0e0;

  &:focus {
    outline: none;
  }

  &:focus ~ ${Label} {
    top: -15px;
    font-size: 11px;
    color: #4285f4;
  }

  &:valid ~ ${Label} {
    top: -15px;
    font-size: 11px;
    color: #4285f4;
  }

  &:focus ~ ${Bar} {
    &:before {
      width: 50%;
    }
    &:after {
      width: 50%;
    }
  }
`;

export const Highlight = styled.span`
  position: absolute;
  height: 60%;
  width: 100px;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
`;

export const Error = styled.div`
  color: #d50000;
  -webkit-tap-highlight-color: transparent;
  -webkit-flex: 1 1 auto;
  flex: 1 1 auto;
  font: 400 12px Roboto,RobotoDraft,Helvetica,Arial,sans-serif;
  min-height: 16px;
  padding-top: 8px;
`;
