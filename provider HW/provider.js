const EventEmitter = require('events').EventEmitter;
let dataProvider = new EventEmitter();

class DataProvider extends EventEmitter {
    constructor(dataSource) {
        super();
        this.dataSource = dataSource;
    };

    select(path) {
        try {
            let name = this.getValue(path, this.dataSource);
            dataProvider.emit('data', path, name)

        } catch (error) {
            dataProvider.emit('error', path, error)
        }
    }

    getValue(path, dataSource) {

        let segments = path.split('.');
        let level = dataSource;
        let last_s = undefined;

        segments.forEach(item => {

            if (level !== undefined && level !== null) {
                level = level[item]
            } else {
                level = undefined
                throw 'ERROR'
            }
            last_s = item
        })
        return level
    }
}

module.exports.DataProvider = DataProvider;