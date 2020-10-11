const Benchmark = require('benchmark');
const {versions} = require('./versions');

const value1 = [
	{
		"id": "0001",
		"type": "donut",
		"name": "Cake",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" },
						{ "id": "1003", "type": "Blueberry" },
						{ "id": "1004", "type": "Devil's Food" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5007", "type": "Powdered Sugar" },
				{ "id": "5006", "type": "Chocolate with Sprinkles" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	{
		"id": "0002",
		"type": "donut",
		"name": "Raised",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	{
		"id": "0003",
		"type": "donut",
		"name": "Old Fashioned",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	}
];

const value2 = {
	"items":
		{
			"item":
				[
					{
						"id": "0001",
						"type": "donut",
						"name": "Cake",
						"ppu": 0.55,
						"batters":
							{
								"batter":
									[
										{ "id": "1001", "type": "Regular" },
										{ "id": "1002", "type": "Chocolate" },
										{ "id": "1003", "type": "Blueberry" },
										{ "id": "1004", "type": "Devil's Food" }
									]
							},
						"topping":
							[
								{ "id": "5001", "type": "None" },
								{ "id": "5002", "type": "Glazed" },
								{ "id": "5005", "type": "Sugar" },
								{ "id": "5007", "type": "Powdered Sugar" },
								{ "id": "5006", "type": "Chocolate with Sprinkles" },
								{ "id": "5003", "type": "Chocolate" },
								{ "id": "5004", "type": "Maple" }
							]
					},
					{
						"id": "0002",
						"type": "donut",
						"name": "Cake",
						"ppu": 0.55,
						"batters":
							{
								"batter":
									[
										{ "id": "1001", "type": "Regular" },
										{ "id": "1002", "type": "Chocolate" },
										{ "id": "1003", "type": "Blueberry" },
										{ "id": "1004", "type": "Devil's Food" }
									]
							},
						"topping":
							[
								{ "id": "5001", "type": "None" },
								{ "id": "5002", "type": "Glazed" },
								{ "id": "5005", "type": "Sugar" },
								{ "id": "5007", "type": "Powdered Sugar" },
								{ "id": "5006", "type": "Chocolate with Sprinkles" },
								{ "id": "5003", "type": "Chocolate" },
								{ "id": "5004", "type": "Maple" }
							]
					},
				]
		}
};

const value3 = {
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": [
        "Radiation resistance",
        "Turning tiny",
        "Radiation blast"
      ]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ],
  "user": {
    "firstName": "John",
    "lastName": "Smith",
    "isAlive": true,
    "age": 27,
    "address": {
      "streetAddress": "21 2nd Street",
      "city": "New York",
      "state": "NY",
      "postalCode": "10021-3100"
    },
    "phoneNumbers": [
      {
        "type": "home",
        "number": "212 555-1234"
      },
      {
        "type": "office",
        "number": "646 555-4567"
      }
    ],
    "children": [],
    "spouse": null
  },
};

const value4 = {
  "$schema": "http://json-schema.org/draft/2019-09/schema",
  "title": "Product",
  "type": "object",
  "required": ["id", "name", "price"],
  "properties": {
    "id": {
      "type": "number",
      "description": "Product identifier"
    },
    "name": {
      "type": "string",
      "description": "Name of the product"
    },
    "price": {
      "type": "number",
      "minimum": 0
    },
    "tags": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "stock": {
      "type": "object",
      "properties": {
        "warehouse": {
          "type": "number"
        },
        "retail": {
          "type": "number"
        }
      }
    }
  }
};

const value5 = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "http://json-schema.org/draft-07/schema#",
  "title": "Core schema meta-schema",
  "definitions": {
      "schemaArray": {
          "type": "array",
          "minItems": 1,
          "items": { "$ref": "#" }
      },
      "nonNegativeInteger": {
          "type": "integer",
          "minimum": 0
      },
      "nonNegativeIntegerDefault0": {
          "allOf": [
              { "$ref": "#/definitions/nonNegativeInteger" },
              { "default": 0 }
          ]
      },
      "simpleTypes": {
          "enum": [
              "array",
              "boolean",
              "integer",
              "null",
              "number",
              "object",
              "string"
          ]
      },
      "stringArray": {
          "type": "array",
          "items": { "type": "string" },
          "uniqueItems": true,
          "default": []
      }
  },
  "type": ["object", "boolean"],
  "properties": {
      "$id": {
          "type": "string",
          "format": "uri-reference"
      },
      "$schema": {
          "type": "string",
          "format": "uri"
      },
      "$ref": {
          "type": "string",
          "format": "uri-reference"
      },
      "$comment": {
          "type": "string"
      },
      "title": {
          "type": "string"
      },
      "description": {
          "type": "string"
      },
      "default": true,
      "readOnly": {
          "type": "boolean",
          "default": false
      },
      "writeOnly": {
          "type": "boolean",
          "default": false
      },
      "examples": {
          "type": "array",
          "items": true
      },
      "multipleOf": {
          "type": "number",
          "exclusiveMinimum": 0
      },
      "maximum": {
          "type": "number"
      },
      "exclusiveMaximum": {
          "type": "number"
      },
      "minimum": {
          "type": "number"
      },
      "exclusiveMinimum": {
          "type": "number"
      },
      "maxLength": { "$ref": "#/definitions/nonNegativeInteger" },
      "minLength": { "$ref": "#/definitions/nonNegativeIntegerDefault0" },
      "pattern": {
          "type": "string",
          "format": "regex"
      },
      "additionalItems": { "$ref": "#" },
      "items": {
          "anyOf": [
              { "$ref": "#" },
              { "$ref": "#/definitions/schemaArray" }
          ],
          "default": true
      },
      "maxItems": { "$ref": "#/definitions/nonNegativeInteger" },
      "minItems": { "$ref": "#/definitions/nonNegativeIntegerDefault0" },
      "uniqueItems": {
          "type": "boolean",
          "default": false
      },
      "contains": { "$ref": "#" },
      "maxProperties": { "$ref": "#/definitions/nonNegativeInteger" },
      "minProperties": { "$ref": "#/definitions/nonNegativeIntegerDefault0" },
      "required": { "$ref": "#/definitions/stringArray" },
      "additionalProperties": { "$ref": "#" },
      "definitions": {
          "type": "object",
          "additionalProperties": { "$ref": "#" },
          "default": {}
      },
      "properties": {
          "type": "object",
          "additionalProperties": { "$ref": "#" },
          "default": {}
      },
      "patternProperties": {
          "type": "object",
          "additionalProperties": { "$ref": "#" },
          "propertyNames": { "format": "regex" },
          "default": {}
      },
      "dependencies": {
          "type": "object",
          "additionalProperties": {
              "anyOf": [
                  { "$ref": "#" },
                  { "$ref": "#/definitions/stringArray" }
              ]
          }
      },
      "propertyNames": { "$ref": "#" },
      "const": true,
      "enum": {
          "type": "array",
          "items": true,
          "minItems": 1,
          "uniqueItems": true
      },
      "type": {
          "anyOf": [
              { "$ref": "#/definitions/simpleTypes" },
              {
                  "type": "array",
                  "items": { "$ref": "#/definitions/simpleTypes" },
                  "minItems": 1,
                  "uniqueItems": true
              }
          ]
      },
      "format": { "type": "string" },
      "contentMediaType": { "type": "string" },
      "contentEncoding": { "type": "string" },
      "if": { "$ref": "#" },
      "then": { "$ref": "#" },
      "else": { "$ref": "#" },
      "allOf": { "$ref": "#/definitions/schemaArray" },
      "anyOf": { "$ref": "#/definitions/schemaArray" },
      "oneOf": { "$ref": "#/definitions/schemaArray" },
      "not": { "$ref": "#" }
  },
  "default": true
};

const values = [
  value1,
  value2,
  value3,
  value4,
  value5,
];

const suite = new Benchmark.Suite;

let i = 1;
for (const name in versions) {
  const copy = versions[name];
  suite
    .add(i + '. ' + name, function() {
      for (const value of values) copy(value);
    });
  i++;
}

suite
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  .run();
