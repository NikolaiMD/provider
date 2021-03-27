const { DataProvider } = require('./provider')
let path = "users.0.address.city";
let falsePath = "users.0.5.address.city";

const data = {
    users: [
        {
            name: "John",
            address: {
                city: "GoodTown",
                country: "Amazing States of Unity"
            }
        },
        {
            name: "Marry",
            address: {
                city: "JobTown",
                country: "Employment Emirates"
            }
        }
    ]
};

let dataProvider = new DataProvider( data );
dataProvider.on('data', (path, data)=>{ console.log( "FOUND", data, "on", path)  })
dataProvider.on('error', (path, error)=>{ console.log( error, "on", path)  })

dataProvider.select(path)
dataProvider.select(falsePath)