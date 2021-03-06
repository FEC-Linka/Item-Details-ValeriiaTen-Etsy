import styled from 'styled-components';

export const Box = styled('div')`
  width: 100%;
  padding-top: 2px;
  background: none;
  overflow: hidden;
`;

export const DropDownContainer = styled('div')`
  position: relative;
`;

export const DropDownHeader = styled('div')`
  padding: 10px 36px 10px 12px;
  box-shadow: 0 1px 6px 0 rgba(34, 34, 34, 0.15);
  display: block;
  font-family: inherit;
  font-size: 16px;
  color: #3faffa;
  height: 48px;
  // padding-left: 12px;
  // padding-right: 36px;
  color: #222222;
  text-indent: 0.01px;
  cursor: pointer;
  border-radius: 6px;
  background: #ffffff;
  border-color: rgba(34, 34, 34, 0.15);
  border-style: solid;
  border-width: 1px;
  &:hover {
    border-color: rgba(34, 34, 34, 0.5);
    box-shadow: 0 1px 12px 0 rgba(34, 34, 34, 0.2);
  }
  box-sizing: border-box;
`;

export const DropDownListContainer = styled('div')`
  position: absolute;
  width: 100%;
`;

export const DropDownList = styled('ul')`
  padding: 6px 0px 6px 10px;
  margin-top: -0.2em;
  box-sizing: border-box;
  font-weight: normal;
  white-space: pre;
  min-height: 1.2em;
  background: #ffffff;
  border-color: rgba(34, 34, 34, 0.15);
  border-radius: 0px;
  border-width: 1px;
  border-style: solid;
  border-color: -internal-light-dark(rgb(118, 118, 118), rgb(195, 195, 195));
`;

export const ListItem = styled('li')`
  font-weight: normal;
  display: block;
  white-space: pre;
  min-height: 1.2em;
  padding: 0px 2px 1px;
  color: #222;
  &:hover {
    background-color: #0099ff;
    color: white;
  }
  // font: 400 13.3333px Arial;
  font-size: 16px;
`;

export const Title = styled.h1`
  font-family: 'Graphik Webfont', -apple-system, BlinkMacSystemFont, 'Roboto',
    'Droid Sans', 'Segoe UI', 'Helvetica', Arial, sans-serif;
  font-weight: 300;
  font-size: 13px;
  line-height: 10px;
  color: #222;
`;

export const Button1 = styled.button`
  font-family: 'Graphik Webfont', -apple-system, BlinkMacSystemFont, 'Roboto',
    'Droid Sans', 'Segoe UI', 'Helvetica', Arial, sans-serif;
  background: none;
  border-radius: 24px;
  font-size: 16px;
  line-height: 1.5;
  min-height: 48px;
  min-width: 48px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  display: inline-block;
  text-align: center;
  background-color: -internal-light-dark(rgb(239, 239, 239), rgb(74, 74, 74));
  margin-top: 1em;
  padding: 1px 6px;
  outline: none;
  background-size: 100% 60%;
  background-position: 50% 50%;
  width: 100% !important;
`;

export const Button2 = styled.button`
  font-family: 'Graphik Webfont', -apple-system, BlinkMacSystemFont, 'Roboto',
    'Droid Sans', 'Segoe UI', 'Helvetica', Arial, sans-serif;
  border: none;
  border-radius: 24px;
  font-size: 16px;
  color: white;
  line-height: 1.5;
  min-height: 48px;
  min-width: 48px;
  font-size: 16px;
  font-weight: bold;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  display: inline-block;
  text-align: center;
  background-color: -internal-light-dark(rgb(239, 239, 239), rgb(74, 74, 74));
  margin-top: 1em;
  padding: 1px 6px;
  outline: none;
  border-color: -internal-light-dark(rgb(118, 118, 118), rgb(195, 195, 195));
  background: #222222;
  background-size: 100% 60%;
  background-position: 50% 50%;
  width: 100% !important;
`;
