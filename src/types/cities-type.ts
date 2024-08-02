export type TCity = {
  name: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
}

export type TLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
}
