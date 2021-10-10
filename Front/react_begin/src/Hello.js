import React, { Component } from 'react';

class Hello extends Component {
  static defaultProps = {
    name: '이름없음'
    // name의 기본값 설정
  };

  render () {
    const { color, name, isSpecial } = this.props; // 인자 받아오기
    return (
      <div style={{ color }}>
        {isSpecial && <b>*</b>}
        안녕하세요 {name}
      </div>
    );
  };
}

Hello.defaultProps = {
  name: '이름없음'
}

export default Hello;