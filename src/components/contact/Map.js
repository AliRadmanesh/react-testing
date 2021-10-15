import React from 'react';
import leaflet from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import markerIcon from '../../assets/icons/Location pin.svg';
import phoneIcon from '../../assets/icons/phone.svg';
import messageIcon from '../../assets/icons/Message.svg';

import 'leaflet/dist/leaflet.css';

const styles = {
  minHeight: '400px',
};

export default function ContactMap() {
  const position = [51.505, -0.09];

  return (
    <div className="tw-h-auto tw-w-full tw-relative">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        dragging={false}
        className="border-smooth"
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      <div
        className="tw-absolute tw-bottom-0 tw-mb-4 bg-white tw-rounded-xl tw-right-4 tw-left-4 tw-mx-auto font-kalameh"
        style={{ zIndex: '99999' }}
      >
        <div className="tw-flex tw-py-4 tw-flex-col">
          <div className="tw-flex tw-my-2 lg:tw-my-4 tw-items-center">
            <img src={markerIcon} alt="" className="icon tw-mx-4 2xl:tw-mx-6" />
            <div className="tw-px-4 2xl:tw-px-6 tw-border-gray-200 tw-border-r">
              <p className="tw-text-base 2xl:tw-text-xl tw-font-semibold text-black tw-mb-2">
                آدرس
              </p>
              <p className="text-gray tw-text-xs tw-font-noraml 2xl:tw-text-lg">
                تهران، حکیمیه، بلوار دانشجو، دانشگاه شهید بهشتی، پردیس فنی شهید عباسپور، پارک علم و
                فناوری دانشگاه شهید بهشتی تهران
              </p>
            </div>
          </div>
          <div className="tw-flex tw-my-2 lg:tw-my-4 tw-items-center">
            <img src={phoneIcon} alt="" className="icon tw-mx-4 2xl:tw-mx-6" />
            <div className="tw-px-4 2xl:tw-px-6 tw-border-gray-200 tw-border-r">
              <p className="tw-text-base 2xl:tw-text-xl tw-font-semibold text-black tw-mb-2">
                تلفن تماس
              </p>
              <p>
                <span className="text-gray tw-font-normal tw-text-xs lg:tw-text-lg">۰۲۱</span>
                &nbsp;
                <span className="text-blue tw-text-base tw-font-semibold 2xl:tw-text-lg">
                  ۷۷۳۱۳۱۸۸
                </span>
              </p>
            </div>
          </div>
          <div className="tw-flex tw-my-2 lg:tw-my-4 tw-items-center">
            <img src={messageIcon} alt="" className="icon tw-mx-4 2xl:tw-mx-6" />
            <div className="tw-px-4 2xl:tw-px-6 tw-border-gray-200 tw-border-r">
              <p className="tw-text-base 2xl:tw-text-xl tw-font-semibold text-black tw-mb-2">
                ایمیل
              </p>
              <p className="tw-text-xs tw-font-noraml 2xl:tw-text-lg">info@karsaz.app</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
