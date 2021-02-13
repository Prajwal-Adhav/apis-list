const fs = require("fs");
const YAML = require("yaml");

exports.read = (source) => {
    const data = fs.readFileSync(source, {encoding: 'utf8'})

    return YAML.parse(data)
}