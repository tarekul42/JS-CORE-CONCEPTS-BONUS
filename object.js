const nayok = {
    name:'Sakib Khan',
    id:121,
    address:'movie cinema',
    isSingle:true,
    friends:['Apu', 'Raaz', 'Salman', 'aamir'],
    movies:[{name:'no.1', year:2015},{name:'King Khan', year:2018}],
    act: function(){
        console.log('acting like Shakib Khan');
    },
    car:{
        band:'tesla',
        price:50000000,
        made:2025,
        manufacturer:{
            name:'tesla',
            ceo:'Elon mask',
            country:'USA'
        }
    }
}
console.log(nayok.act);
nayok.act();