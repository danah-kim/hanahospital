import React, { useEffect } from "react";
import styled from "styled-components";

const Map = styled.div`
  width: 100%;
  height: 100%;
`;

export default data => {
  if (
    !data.apiKey ||
    typeof data.apiKey !== "string" ||
    !data.lng ||
    typeof data.lng !== "number" ||
    !data.lat ||
    typeof data.lat !== "number"
  ) {
    return;
  }

  useEffect(() => {
    let script = document.createElement("script");

    script.id = "kakao-sdk";
    script.type = "text/javascript";
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appKey=${
      data.apiKey
    }&libraries=services,clusterer,drawing&autoload=false`;

    document.head.append(script);

    script.onload = () => {
      const daum = window.daum;
      daum.maps.load(function() {
        const map = new daum.maps.Map(document.getElementById("kakao-map"), {
          center: new daum.maps.LatLng(data.lng, data.lat),
          level: 3
        });

        const marker = new daum.maps.Marker({
          position: new daum.maps.LatLng(data.lng, data.lat)
        });

        marker.setMap(map);

        const mapTypeControl = new daum.maps.MapTypeControl();
        map.addControl(mapTypeControl, daum.maps.ControlPosition.TOPRIGHT);

        const zoomControl = new daum.maps.ZoomControl();
        map.addControl(zoomControl, daum.maps.ControlPosition.RIGHT);
      });
    };

    let kakaoMapRoot = document.getElementById("kakao-map");

    if (!kakaoMapRoot) {
      kakaoMapRoot = document.createElement("div");
      kakaoMapRoot.id = "kakao-map";
      document.body.appendChild(kakaoMapRoot);
    }
  }, [data.apiKey, data.lat, data.lng]);

  return <Map id="kakao-map" />;
};
