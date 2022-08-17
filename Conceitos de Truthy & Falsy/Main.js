const x = '';
// FALSE
console.log(!!x);

if (false) {
    console.log(x);
}

const y = 0;
console.log(!!y)
// FALSE

const a = null;
const b = undefined;
console.log(!!a);
console.log(!!b);
// FALSE

const list = [];
const object = {};
console.log(!![]);
console.log(!!object);
//  TRUE

if (list.length > 0) {
    console.log(list)
}
//  TRUE



