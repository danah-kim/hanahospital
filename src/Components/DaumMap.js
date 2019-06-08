import React, { Component } from "react";
import styled from "styled-components";

const Map = styled.div`
  width: 100%;
  height: 100%;
`;

class DaumMap extends Component {
  state = { sdkLoaded: false };

  loadKakaoSdk = () => {
    const { apiKey, lng, lat } = this.props;

    let script = document.createElement("script");

    script.id = "kakao-sdk";
    script.type = "text/javascript";
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appKey=${apiKey}&libraries=services,clusterer,drawing&autoload=false`;

    document.head.append(script);

    script.onload = () => {
      const daum = window.daum;
      daum.maps.load(function() {
        const map = new daum.maps.Map(document.getElementById("kakao-map"), {
          center: new daum.maps.LatLng(lng, lat),
          level: 3
        });

        const marker = new daum.maps.Marker({
          position: new daum.maps.LatLng(lng, lat)
        });

        marker.setMap(map);

        const mapTypeControl = new daum.maps.MapTypeControl();
        map.addControl(mapTypeControl, daum.maps.ControlPosition.TOPRIGHT);

        const zoomControl = new daum.maps.ZoomControl();
        map.addControl(zoomControl, daum.maps.ControlPosition.RIGHT);
      });
    };
  };

  sdkLoaded() {
    this.setState({ sdkLoaded: true });
  }

  componentDidMount() {
    if (document.getElementById("kakaomap-sdk")) {
      this.sdkLoaded();
    }

    this.loadKakaoSdk();
    let kakaoMapRoot = document.getElementById("kakao-map");
    if (!kakaoMapRoot) {
      kakaoMapRoot = document.createElement("div");
      kakaoMapRoot.id = "kakao-map";
      document.body.appendChild(kakaoMapRoot);
    }
  }

  render() {
    return <Map id="kakao-map" />;
  }
}

export default DaumMap;
