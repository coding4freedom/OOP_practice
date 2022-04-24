
/* using Constructor function to create obj  */


function DestroyTarget(target, armor, wpn) {
    this.target = target;
    this.armor = armor;
    this.wpn = { 
        handgun: 'handgun',
        ar: 'ar', 
        shotgun: 'shotgun', 
    };
    let weapon = {
        handgun: 10,
        ar: 20,
        shotgun: 45,
    };

    let checkTarget = function() {
        if(target === 0)
            alert('Target has been destroyed!')
    };

    this.atk = function() {

    };

    let calcDmg = function() {

    };

}

const tank = new DestroyTarget(250,50)