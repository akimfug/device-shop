import { makeAutoObservable } from "mobx";

export default class DeviceStore {
    _brands: Array<object>;
    _types: Array<object>;
    _devices: Array<object>;

    constructor() {
        this._brands = [
            { id: 1, name: "Iphone" },
            { id: 2, name: "Samsung" },
            { id: 3, name: "Honor" },
            { id: 4, name: "Xiaomi" }
        ];
        this._types = [
            { id: 1, name: "Телефоны" },
            { id: 2, name: "Компьютеры" },
            { id: 3, name: "Планшеты" },
            { id: 4, name: "Ноутбуки" }
        ];
        this._devices =  [{
            id: 1,
            name: "Iphone 14 Pro Max",
            price: 80000,
            rating: 0,
            img: "d66bc6ed-36fc-479a-bc5d-e79cd4d9c614.jpg",
            typeId: 1,
            brandId: 1
          },
          {
            id: 2,
            name: "Iphone 15 Pro Max",
            price: 90000,
            rating: 0,
            img: "ae0346d8-394f-469d-9749-75024df04ac6.jpg",
            typeId: 1,
            brandId: 1
          },
          {
            id: 3,
            name: "Samsung S24 Ultra",
            price: 120000,
            rating: 0,
            img: "319b35d7-8f7e-4005-8a6f-9ca3957f3d22.jpg",
            typeId: 1,
            brandId: 2
          }];
        makeAutoObservable(this);
    }

    setBrands(brands: Array<object>) {
        this._brands = brands;
    }

    setTypes(types: Array<object>) {
        this._types = types;
    }

    setDevices(devices: Array<object>) {
        this._devices = devices;
    }

    get brands() {
        return this._brands;
    }

    get types() {
        return this._types;
    }

    get devices() {
        return this._devices;
    }
}