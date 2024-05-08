import { grey, green, blue, red, orange } from '@ant-design/colors';

export const SKILLS_LIST = [
  { label: 'React.JS', value: 'REACT.JS' },
  { label: '.NET', value: '.NET' },
  { label: '.NET Gadgeteer', value: '.NETGADGETEER' },
  { label: '.NET Standard', value: 'NETSTANDARD' },
  { label: 'ABAP', value: 'ABAP' },
  { label: 'ABCL', value: 'ABCL' },
  { label: 'Ada', value: 'ADA' },
  { label: 'Afnix', value: 'AFNIX' },
  { label: 'Agile', value: 'AGILE' },
  { label: 'Agora', value: 'AGORA' },
  { label: 'ALF', value: 'ALF' },
  { label: 'ALGOL', value: 'ALGOL' },
  { label: 'Android', value: 'ANDROID' },
  { label: 'Angular', value: 'ANGULAR' },
  { label: 'Angular 2', value: 'ANGULAR2' },
  { label: 'Angular 4', value: 'ANGULAR4' },
  { label: 'Angular 5', value: 'ANGULAR5' },
  { label: 'Angular 6', value: 'ANGULAR6' },
  { label: 'Angular 7', value: 'ANGULAR7' },
  { label: 'Angular JS', value: 'ANGULARJS' },
  { label: 'System admin', value: 'SYSTEMADMIN' },
  { label: 'AppleScript', value: 'APPLESCRIPT' },
  { label: 'ASP.NET', value: 'ASP.NET' },
  { label: 'AutoIt', value: 'AUTOIT' },
  { label: 'Awk', value: 'AWK' },
  { label: 'AWS', value: 'AWS' },
  { label: 'Back End', value: 'BACKEND' },
  { label: 'BASIC', value: 'BASIC' },
  { label: 'BeanShell', value: 'BEANSHELL' },
  { label: 'BETA', value: 'BETA' },
  { label: 'Bliss', value: 'BLISS' },
  { label: 'Blockchain', value: 'BLOCKCHAIN' },
  { label: 'Bridge Engineer', value: 'BRIDGEENGINEER' },
  { label: 'Business Analyst', value: 'BUSINESSANALYST' },
  { label: 'C language', value: 'CLANGUAGE' },
  { label: 'C#', value: 'C#' },
  { label: 'C++', value: 'C++' },
  { label: 'Cecil', value: 'CECIL' },
  { label: 'ChucK', value: 'CHUCK' },
  { label: 'Cilk', value: 'CILK' },
  { label: 'iOS', value: 'IOS' },
  { label: 'CLEO', value: 'CLEO' },
  { label: 'CLIST', value: 'CLIST' },
  { label: 'Team management', value: 'TEAMMANAGEMENT' },
  { label: 'COBOL', value: 'COBOL' },
  { label: 'Cobra', value: 'COBRA' },
  { label: 'ColdFusion', value: 'COLDFUSION' },
  { label: 'Component Pascal', value: 'COMPONENTPASCAL' },
  { label: 'Concurrent Pascal', value: 'CONCURRENTPASCAL' },
  { label: 'CSS', value: 'CSS' },
  { label: 'CSS 3', value: 'CSS3' },
  { label: 'React Native', value: 'REACT NATIVE' },
  { label: 'Vue.JS', value: 'VUE.JS' },
  { label: 'Nest.JS', value: 'NEST.JS' },
  { label: 'TypeScript', value: 'TYPESCRIPT' },
  { label: 'Java', value: 'JAVA' },
  { label: 'Frontend', value: 'FRONTEND' },
  { label: 'Fullstack', value: 'FULLSTACK' },
];

export const LOCATION_LIST = [
  { label: 'Hà Nội', value: 'HANOI' },
  { label: 'Hồ Chí Minh', value: 'HOCHIMINH' },
  { label: 'Đà Nẵng', value: 'DANANG' },
  { label: 'Others', value: 'OTHER' },
  { label: 'Tất cả thành phố', value: 'ALL' },
];

export const nonAccentVietnamese = (str: string) => {
  str = str.replace(/A|Á|À|Ã|Ạ|Â|Ấ|Ầ|Ẫ|Ậ|Ă|Ắ|Ằ|Ẵ|Ặ/g, 'A');
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  str = str.replace(/E|É|È|Ẽ|Ẹ|Ê|Ế|Ề|Ễ|Ệ/, 'E');
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  str = str.replace(/I|Í|Ì|Ĩ|Ị/g, 'I');
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  str = str.replace(/O|Ó|Ò|Õ|Ọ|Ô|Ố|Ồ|Ỗ|Ộ|Ơ|Ớ|Ờ|Ỡ|Ợ/g, 'O');
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  str = str.replace(/U|Ú|Ù|Ũ|Ụ|Ư|Ứ|Ừ|Ữ|Ự/g, 'U');
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  str = str.replace(/Y|Ý|Ỳ|Ỹ|Ỵ/g, 'Y');
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  str = str.replace(/Đ/g, 'D');
  str = str.replace(/đ/g, 'd');
  // Some system encode vietnamese combining accent as individual utf-8 characters
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ''); // Huyền sắc hỏi ngã nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, ''); // Â, Ê, Ă, Ơ, Ư
  return str;
};

export const convertSlug = (str: string) => {
  str = nonAccentVietnamese(str);
  str = str.replace(/^\s+|\s+$/g, ''); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  const from =
    'ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆĞÍÌÎÏİŇÑÓÖÒÔÕØŘŔŠŞŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇğíìîïıňñóöòôõøðřŕšşťúůüùûýÿžþÞĐđßÆa·/_,:;';
  const to =
    'AAAAAACCCDEEEEEEEEGIIIIINNOOOOOORRSSTUUUUUYYZaaaaaacccdeeeeeeeegiiiiinnooooooorrsstuuuuuyyzbBDdBAa------';
  for (let i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  str = str
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-'); // collapse dashes

  return str;
};

export const getLocationName = (value: string) => {
  const locationFilter = LOCATION_LIST.filter((item) => item.value === value);
  if (locationFilter.length) return locationFilter[0].label;
  return 'unknown';
};

export function colorMethod(
  method: 'POST' | 'PUT' | 'GET' | 'DELETE' | string
) {
  switch (method) {
    case 'POST':
      return green[6];
    case 'PUT':
      return orange[6];
    case 'GET':
      return blue[6];
    case 'DELETE':
      return red[6];
    default:
      return grey[10];
  }
}
