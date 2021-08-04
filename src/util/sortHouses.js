const sort = (data) => {
    const streets= {}
    const houses = {}
    data.forEach(item => {
        if (!streets[item.streetName])  { streets[item.streetName]={}
            streets[item.streetName].streetId=item.streetId
            streets[item.streetName].houses=[]
        }
        if (!streets[item.streetName].houses.includes(item.houseId))
            streets[item.streetName].houses.push(item.houseId)
        const houseName = (item.corpus)?item.building+item.corpus:item.building
        if (!houses[item.houseId])  { houses[item.houseId]={}
            houses[item.houseId].houseName= houseName
            houses[item.houseId].flats=[]
        }
        houses[item.houseId].flats.push(item)

    })

    return {
        houses:houses,
        streets:streets
    }
    
}

export default sort