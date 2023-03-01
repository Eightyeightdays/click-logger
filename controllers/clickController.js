const Click = require("../models/clickModel.js");
const Click2 = require("../models/clickModel2.js");
const Click3 = require("../models/clickModel3.js");
const Click4 = require("../models/clickModel4.js");
const Click5 = require("../models/clickModel5.js");
const Click6 = require("../models/clickModel6.js");
const dayjs = require("dayjs");

exports.handleClicks = (req, res) => {
    const DATE = dayjs().format("dddd, MMMM D YYYY, HH:mm:ss a");
    var record;
    var url;

    switch(req.url){
        case "/link1":
            record = new Click({dateCreated: DATE});
            url = process.env.LINK_1;
        break;
        case "/link2":
            record = new Click2({dateCreated: DATE});
            url = process.env.LINK_2;
        break;
        case "/link3":
            record = new Click3({dateCreated: DATE});
            url = process.env.LINK_3;
        break;
        case "/link4":
            record = new Click4({dateCreated: DATE});
            url = process.env.LINK_4;
        break;
        case "/link5":
            record = new Click5({dateCreated: DATE});
            url = process.env.LINK_5;
        break;
        case "/link6":
            record = new Click6({dateCreated: DATE});
            url = process.env.LINK_6;
        break;
    }

    record.save()
        .then(()=> res.redirect(url))
        .catch(error => res.status(400).json(error))
}