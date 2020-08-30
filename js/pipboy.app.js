
$(document).ready(function(){
    console.log('Ready');

    let weapons = [
        {
            "name": "44pistol",
            "damage": 48,
            "fire_rate": 6,
            "range": 119,
            "accuracy": 61,
            "weight": 4.2,
            "value": 99
        },
        {
            "name": "eddie",
            "damage": 48,
            "fire_rate": 6,
            "range": 125,
            "accuracy": 81,
            "weight": 5,
            "value": 454
        },
        {
            "name": "kellog",
            "damage": 48,
            "fire_rate": 6,
            "range": 119,
            "accuracy": 70,
            "weight": 4.3,
            "value": 449
        },
        {
            "name": "gainer",
            "damage": 48,
            "fire_rate": 6,
            "range": 119,
            "accuracy": 74,
            "weight": 4.3,
            "value": 449
        },
        {
            "name": "10pistol",
            "damage": 18,
            "fire_rate": 46,
            "range": 83,
            "accuracy": 60,
            "weight": 3.5,
            "value": 50
        }
    ];

    $('.item-list').on('click', function(e){
       $('.item-list a').removeClass('active');
       $(e.currentTarget).find('a').addClass('active');
    });

    $('.item-list').on('mouseenter', function(e){
        let current_item = $(e.currentTarget).find('a').attr('class');
        console.log(current_item);

        for(item in weapons)
        {
            if(weapons[item].name == current_item){
                console.log(weapons[item]);

                let container = $('.item-stats');
                container.find('.damage').html(weapons[item].damage);
                container.find('.ammo').html(weapons[item].damage + weapons[item].value);
                container.find('.fire_rate').html(weapons[item].fire_rate);
                container.find('.range').html(weapons[item].range);
                container.find('.accuracy').html(weapons[item].accuracy);
                container.find('.weight').html(weapons[item].weight);
                container.find('.value').html(weapons[item].value);
            }
        }
    });

    $('.item-list').on('mouseleave', function(e){
        let container = $('.item-stats');
        container.find('.damage').html(0);
        container.find('.ammo').html(0);
        container.find('.fire_rate').html(0);
        container.find('.range').html(0);
        container.find('.accuracy').html(0);
        container.find('.weight').html(0);
        container.find('.value').html(0);
    });
});

