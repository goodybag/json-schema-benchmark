module.exports = {
    type : "object",
    additionalProperties : false,
    properties :
    {
        fullName            : { type : "string", required : true },
        age                 : { type : "integer", required : true },
        optionalItem        : { type : "string" },
        state               : { type : "string" },
        city                : { type : "string" },
        zip                 : { type : "string", required : true, length: 5, pattern: /[0-9]/g },
        married             : { type : "boolean", required : true },
        dozen               : { type : "integer", required : true, minimum : 12, maximum : 12 },
        dozenOrBakersDozen  : { type : "integer", required : true, minimum : 12, maximum : 13 },
        stuff               : { type : "array", required: true, items: { type: "string" }},
        stuffUnique         : { type : "array", required: true, uniqueItems: true, items: { type: "string" }},
        stuffMax            : { type : "array", required: true, items: { type: "string", max: 12 }},
        stuffMin            : { type : "array", required: true, items: { type: "string", min: 12 }}
    }
};