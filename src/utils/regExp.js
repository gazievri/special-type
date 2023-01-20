export const nameRegExp = /^[a-zа-яё-]+$/iu;

// Для валидации поля, которое содержит имя и фамилию одновременно
export const fullNameRegExp = /^[a-zа-яё ,.'-]+$/iu;

// export const descriptionRegExp = /^[a-z0-9а-яё; .,-]+$/iu;

export const descriptionRegExp = /^[a-z0-9а-яё;. ,-][a-z0-9а-яё; .,-]+$/iu;

export const emailRegExp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

export const phoneRegExp = /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/;