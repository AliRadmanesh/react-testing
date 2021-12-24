import React from 'react';
import leaflet from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import markerIcon from '../../assets/icons/Location pin.svg';
import phoneIcon from '../../assets/icons/phone.svg';
import messageIcon from '../../assets/icons/Message.svg';

import 'leaflet/dist/leaflet.css';

import icon from './marker.svg';

const marker = new leaflet.Icon({
  iconUrl: icon,
  iconRetinaUrl: icon,
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new leaflet.Point(60, 75),
});

export { marker };

leaflet.Marker.prototype.icon = marker;

export default function ContactMap() {
  const pin = [35.73972, 51.57953];
  const position = [35.7372, 51.579];

  return (
    <div className="tw-h-auto tw-w-full tw-relative tw-order-first lg:tw-order-last">
      <MapContainer
        center={position}
        zoom={15}
        scrollWheelZoom={false}
        dragging={false}
        className="border-smooth"
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={pin} icon={marker} />
      </MapContainer>
      <div
        className="tw-absolute tw-bottom-0 tw-mb-4 bg-white tw-rounded-xl tw-right-4 tw-left-4 tw-mx-auto font-kalameh"
        style={{ zIndex: '999' }}
      >
        <div className="tw-flex tw-py-4 tw-flex-col">
          <div className="tw-flex tw-my-2 lg:tw-my-4 tw-items-center">
            <img src={markerIcon} alt="" className="icon tw-mx-4 2xl:tw-mx-6" />
            <div className="tw-px-4 2xl:tw-px-6 tw-border-gray-200 tw-border-r">
              <p className="tw-text-base 2xl:tw-text-xl tw-font-semibold text-black tw-mb-2">
                آدرس
              </p>
              <p className="text-gray tw-text-xs tw-font-noraml 2xl:tw-text-lg">
                تهران، حکیمیه، بلوار بهار، دانشگاه شهید بهشتی، پردیس فنی شهید عباسپور، پارک علم و
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
