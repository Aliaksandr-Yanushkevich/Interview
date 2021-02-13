Object.myCreate =  function (object) {
    function F(){};
    F.prototype = object;
    return new F();
}

let location = Object.myCreate({name: 'Valeron'});

location.country= 'Belarus';
location.city= 'Minsk';

console.log(location.name)
