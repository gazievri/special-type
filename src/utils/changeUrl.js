import { getPlug } from "./getPlug";

// Проверка на объект
const isObject = (obj) => {
  return Object.prototype.toString.call(obj) === "[object Object]";
};

// Проверка на массив
const isArray = (arr) => {
  return Object.prototype.toString.call(arr) === "[object Array]";
};

// Исправление url в массиве
const itemImgArray = (images) => {
    console.log(images, 'arr')
  if (images.length == 0) {
    return getPlug();
  } else {
    const newImages = images.map((item) => {
      const newImg = item.image.slice(22, 2000);
      let newImgUrl = `http://135.181.198.180:8080${newImg}`;
      return {...item, image: newImgUrl}
    });
    return newImages;
  }
};

// Исправление url в объекте
const itemImgObject = (images) => {
    console.log(images, 'obj')
  if (images.length == 0) {
    return getPlug();
  } else {
    let newImg = images.slice(22, 2000);
    let newImgUrl = `http://135.181.198.180:8080${newImg}`;
    return newImgUrl;
  }
};

// Исправление url в строке
const itemImgString = (images) => {
    console.log(images, 'str')
  if (images === null) {
    return getPlug();
  } else {
    let newImg = images.slice(22, 2000);
    let newImgUrl = `http://135.181.198.180:8080${newImg}`;
    return newImgUrl;
  }
};

// Основная функция
export const changeUrl = (images) => {
  if (isObject(images)) {
    return itemImgObject(images);
  } else if (isArray(images)) {
    return itemImgArray(images);
  } else {
    return itemImgString(images);
  }
};
