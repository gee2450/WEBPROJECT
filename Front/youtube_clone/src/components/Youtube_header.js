import React from 'react';
import styled from 'styled-components';

const HeaderBlock = styled.div`
  background-color: #ffffff;

  height: 60px;

  display: flex;
  align-items: center;

  .search_box {
    height: 30px;
    width: 50%;
    margin-left: auto;
    margin-right: auto;

    display: flex;
  }
  .icon {
    width: 60px;
    display: flex;
    margin-left: 15px;
  }
  .user {
    width: 70px;
    background-color: #eeeeee;
    margin-right: 15px;
  }

  input {
    box-sizing: border-box;
    height: inherit;
    width: 100%;
  }
  button {
    height: inherit;
    width: 65px;
  }
`;

function Youtube_header() {
  return (
    <HeaderBlock>
      <div className="icon">youtube_clone icon</div>
      <div className="search_box">
        <input placeholder="검색"/>
        <button/>
      </div>
      <div className="user">user</div>
    </HeaderBlock>
  );
}

export default Youtube_header;