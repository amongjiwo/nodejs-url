const fs = require("fs");
const os = require("os");

function osInfo(data) {
    fs.writeFileSync("./os-detail.json", JSON.stringify(data));
}

osInfo({
    name: os.hostname(),
    platform: os.platform(),
    architecture: os.arch(),
    release: os.release(),
    type: os.type(),
    cpu: os.cpus(),
});