/*filtro x eggs*/

window.filter = {
    egg: (data,condition) => {
        const EggFilter = data.filter(pokemon => {
            return pokemon.egg == condition;
        })
        return EggFilter;
    },

type: (data,conditionType) => {
        const TypeFilter = data.filter(pokemonType => {
            return pokemonType.type.includes(conditionType);
        })
        return TypeFilter;
    },

candy: (data, conditionCandy) => {
    const CandyFilter = data.filter(pokemonCandy => {
        return pokemonCandy.candy_count == conditionCandy;
    })
        return CandyFilter;
    },

num: (data, conditionNumber) => {
    const NumFilter = data.filter (pokemonNumber => {
        return pokemonNumber.num == conditionNumber; 
    })
    return NumFilter; 
    },

weakness: (data, conditionWeakness) => {
    const WeaknessFilter = data.filter(pokemonWeakness => {
        return pokemonWeakness.weaknesses.includes(conditionWeakness);
    })
    return WeaknessFilter;
    }
}


window.order = {
    firstOrder: (data, order) => {
        if (order=="1-151") {
            const orderData = data.sort((a,b) => {
                return (a.id - b.id);
            })
            return orderData; 
        }
        else if (order=="151-1") {
            const reverseOrder = data.sort((a,b) => {
                return (b.id - a.id);
            })
                return reverseOrder;
        }
    }
}


    

// nombrar data y condicion para que se cumpla 
// generar constante para el .filter
// si la data ingresada es igual a la condicion
// retorna 
