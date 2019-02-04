FORMAT: 1A
HOST: http://docco.apiblueprint.org/

# Docco

Docco is a contract negotiation and agreement tool.

## Negotiations Collection [/negotiations]

### Get A negotiation by ID [GET /negotiations/{negotiationId}]

Gets respective details of the specific negotiation the user has selected to edit/checkout

NOTE: required to pass a 'Bearer token' in the body which includes the logged
in party's specific id.

+ Request (application/json)

+ Parameters

    + negotiationId (number) - ID of the negotiation in the form of an integer

+   Response 200 (application/json)

        {
            "id": 2,
            "title": "Butt insurance",
            "description": "Butt butt butter butt",
            "yourDetails": {
                "id": 2,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
            },
            "yourContent": {
                "id": 55,
                "negotiation": 2,
                "content": "###markdown file",
                "dealAgreed": false
            },
            "theirDetails": {
                "id": 3,
                "legalName": "rad company",
                "displayName": "radco",
                "email": "rad@co.m",
                "address": "\"fake island\"",
                "authorisation": null
            },
            "theirContent": {
                "id": 56,
                "negotiation": 2,
                "content": "###markdown file",
                "dealAgreed": false
            },
            "youEditedLast": true
        }

### Get all negotiations [GET /negotiations]

Gets an array of objects detailing all of the negotiations the querying party
is involved in.

NOTE: required to pass a 'Bearer token' in the body which includes the logged
in party's specific id.

+ Request (application/json)

+   Response 200 (application/json)


            [
                {
        "id": 16,
        "title": "Butt insurance",
        "description": "Butt butt butter butt",
        "yourDetails": {
                "id": 2,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
        },
        "yourContent": {
                "id": 1,
                "negotiation": 2,
                "content": "\"shit fuck shit you b\"",
                "createdAt": null
        },
        "theirDetails": {
                "id": 2,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
            },

            "theirContent": {
                "id": 2,
                "negotiation": 2,
                "content": "\"shit shit shit\"",
                "createdAt": null
            },
        "youEditedLast": true
        },
        {
        "id": 10,
        "title": "Butt insurance",
        "description": "Butt butt butter butt",
        "yourDetails": {
                "id": 4,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
        },
        "yourContent": {
                "id": 50,
                "negotiation": 20,
                "content": "\"shit fuck shit you b\"",
                "createdAt": null
        },
        "theirDetails": {
                "id": 22,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
            },

            "theirContent": {
                "id": 206,
                "negotiation": 3,
                "content": "\"shit shit shit\"",
                "createdAt": null
            },
        "youEditedLast": true
        },
        {
        "id": 90,
        "title": "Butt insurance",
        "description": "Butt butt butter butt",
        "yourDetails": {
                "id": 5,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
        },
        "yourContent": {
                "id": 90,
                "negotiation": 95,
                "content": "\"shit fuck shit you b\"",
                "createdAt": null
        },
        "theirDetails": {
                "id": 600,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
            },

            "theirContent": {
                "id": 6,
                "negotiation": 2,
                "content": "\"shit shit shit\"",
                "createdAt": null
            },
        "youEditedLast": true
        },
         {
        "id": 16,
        "title": "Butt insurance",
        "description": "Butt butt butter butt",
        "yourDetails": {
                "id": 2,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
        },
        "yourContent": {
                "id": 1,
                "negotiation": 2,
                "content": "\"shit fuck shit you b\"",
                "createdAt": null
        },
        "theirDetails": {
                "id": 2,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
            },

            "theirContent": {
                "id": 2,
                "negotiation": 2,
                "content": "\"shit shit shit\"",
                "createdAt": null
            },
        "youEditedLast": true
        },
        {
        "id": 10,
        "title": "Butt insurance",
        "description": "Butt butt butter butt",
        "yourDetails": {
                "id": 4,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
        },
        "yourContent": {
                "id": 50,
                "negotiation": 20,
                "content": "\"shit fuck shit you b\"",
                "createdAt": null
        },
        "theirDetails": {
                "id": 22,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
            },

            "theirContent": {
                "id": 206,
                "negotiation": 3,
                "content": "\"shit shit shit\"",
                "createdAt": null
            },
        "youEditedLast": true
        },
        {
        "id": 90,
        "title": "Butt insurance",
        "description": "Butt butt butter butt",
        "yourDetails": {
                "id": 5,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
        },
        "yourContent": {
                "id": 90,
                "negotiation": 95,
                "content": "\"shit fuck shit you b\"",
                "createdAt": null
        },
        "theirDetails": {
                "id": 600,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
            },

            "theirContent": {
                "id": 6,
                "negotiation": 2,
                "content": "\"shit shit shit\"",
                "createdAt": null
            },
        "youEditedLast": true
        },
         {
        "id": 16,
        "title": "Butt insurance",
        "description": "Butt butt butter butt",
        "yourDetails": {
                "id": 2,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
        },
        "yourContent": {
                "id": 1,
                "negotiation": 2,
                "content": "\"shit fuck shit you b\"",
                "createdAt": null
        },
        "theirDetails": {
                "id": 2,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
            },

            "theirContent": {
                "id": 2,
                "negotiation": 2,
                "content": "\"shit shit shit\"",
                "createdAt": null
            },
        "youEditedLast": true
        },
        {
        "id": 10,
        "title": "Butt insurance",
        "description": "Butt butt butter butt",
        "yourDetails": {
                "id": 4,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
        },
        "yourContent": {
                "id": 50,
                "negotiation": 20,
                "content": "\"shit fuck shit you b\"",
                "createdAt": null
        },
        "theirDetails": {
                "id": 22,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
            },

            "theirContent": {
                "id": 206,
                "negotiation": 3,
                "content": "\"shit shit shit\"",
                "createdAt": null
            },
        "youEditedLast": true
        },
        {
        "id": 90,
        "title": "Butt insurance",
        "description": "Butt butt butter butt",
        "yourDetails": {
                "id": 5,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
        },
        "yourContent": {
                "id": 90,
                "negotiation": 95,
                "content": "\"shit fuck shit you b\"",
                "createdAt": null
        },
        "theirDetails": {
                "id": 600,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
            },

            "theirContent": {
                "id": 6,
                "negotiation": 2,
                "content": "\"shit shit shit\"",
                "createdAt": null
            },
        "youEditedLast": true
        },
         {
        "id": 16,
        "title": "Butt insurance",
        "description": "Butt butt butter butt",
        "yourDetails": {
                "id": 2,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
        },
        "yourContent": {
                "id": 1,
                "negotiation": 2,
                "content": "\"shit fuck shit you b\"",
                "createdAt": null
        },
        "theirDetails": {
                "id": 2,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
            },

            "theirContent": {
                "id": 2,
                "negotiation": 2,
                "content": "\"shit shit shit\"",
                "createdAt": null
            },
        "youEditedLast": true
        },
        {
        "id": 10,
        "title": "Butt insurance",
        "description": "Butt butt butter butt",
        "yourDetails": {
                "id": 4,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
        },
        "yourContent": {
                "id": 50,
                "negotiation": 20,
                "content": "\"shit fuck shit you b\"",
                "createdAt": null
        },
        "theirDetails": {
                "id": 22,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
            },

            "theirContent": {
                "id": 206,
                "negotiation": 3,
                "content": "\"shit shit shit\"",
                "createdAt": null
            },
        "youEditedLast": true
        },
        {
        "id": 90,
        "title": "Butt insurance",
        "description": "Butt butt butter butt",
        "yourDetails": {
                "id": 5,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
        },
        "yourContent": {
                "id": 90,
                "negotiation": 95,
                "content": "\"shit fuck shit you b\"",
                "createdAt": null
        },
        "theirDetails": {
                "id": 600,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
            },

            "theirContent": {
                "id": 6,
                "negotiation": 2,
                "content": "\"shit shit shit\"",
                "createdAt": null
            },
        "youEditedLast": true
        }, {
        "id": 16,
        "title": "Butt insurance",
        "description": "Butt butt butter butt",
        "yourDetails": {
                "id": 2,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
        },
        "yourContent": {
                "id": 1,
                "negotiation": 2,
                "content": "\"shit fuck shit you b\"",
                "createdAt": null
        },
        "theirDetails": {
                "id": 2,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
            },

            "theirContent": {
                "id": 2,
                "negotiation": 2,
                "content": "\"shit shit shit\"",
                "createdAt": null
            },
        "youEditedLast": true
        },
        {
        "id": 10,
        "title": "Butt insurance",
        "description": "Butt butt butter butt",
        "yourDetails": {
                "id": 4,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
        },
        "yourContent": {
                "id": 50,
                "negotiation": 20,
                "content": "\"shit fuck shit you b\"",
                "createdAt": null
        },
        "theirDetails": {
                "id": 22,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
            },

            "theirContent": {
                "id": 206,
                "negotiation": 3,
                "content": "\"shit shit shit\"",
                "createdAt": null
            },
        "youEditedLast": true
        },
        {
        "id": 90,
        "title": "Butt insurance",
        "description": "Butt butt butter butt",
        "yourDetails": {
                "id": 5,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
        },
        "yourContent": {
                "id": 90,
                "negotiation": 95,
                "content": "\"shit fuck shit you b\"",
                "createdAt": null
        },
        "theirDetails": {
                "id": 600,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
            },

            "theirContent": {
                "id": 6,
                "negotiation": 2,
                "content": "\"shit shit shit\"",
                "createdAt": null
            },
        "youEditedLast": true
        },
         {
        "id": 16,
        "title": "Butt insurance",
        "description": "Butt butt butter butt",
        "yourDetails": {
                "id": 2,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
        },
        "yourContent": {
                "id": 1,
                "negotiation": 2,
                "content": "\"shit fuck shit you b\"",
                "createdAt": null
        },
        "theirDetails": {
                "id": 2,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
            },

            "theirContent": {
                "id": 2,
                "negotiation": 2,
                "content": "\"shit shit shit\"",
                "createdAt": null
            },
        "youEditedLast": true
        },
        {
        "id": 10,
        "title": "Butt insurance",
        "description": "Butt butt butter butt",
        "yourDetails": {
                "id": 4,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
        },
        "yourContent": {
                "id": 50,
                "negotiation": 20,
                "content": "\"shit fuck shit you b\"",
                "createdAt": null
        },
        "theirDetails": {
                "id": 22,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
            },

            "theirContent": {
                "id": 206,
                "negotiation": 3,
                "content": "\"shit shit shit\"",
                "createdAt": null
            },
        "youEditedLast": true
        },
        {
        "id": 90,
        "title": "Butt insurance",
        "description": "Butt butt butter butt",
        "yourDetails": {
                "id": 5,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
        },
        "yourContent": {
                "id": 90,
                "negotiation": 95,
                "content": "\"shit fuck shit you b\"",
                "createdAt": null
        },
        "theirDetails": {
                "id": 600,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
            },

            "theirContent": {
                "id": 6,
                "negotiation": 2,
                "content": "\"shit shit shit\"",
                "createdAt": null
            },
        "youEditedLast": true
        },
        {
        "id": 16,
        "title": "Butt insurance",
        "description": "Butt butt butter butt",
        "yourDetails": {
                "id": 2,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
        },
        "yourContent": {
                "id": 1,
                "negotiation": 2,
                "content": "\"shit fuck shit you b\"",
                "createdAt": null
        },
        "theirDetails": {
                "id": 2,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
            },

            "theirContent": {
                "id": 2,
                "negotiation": 2,
                "content": "\"shit shit shit\"",
                "createdAt": null
            },
        "youEditedLast": true
        },
        {
        "id": 10,
        "title": "Butt insurance",
        "description": "Butt butt butter butt",
        "yourDetails": {
                "id": 4,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
        },
        "yourContent": {
                "id": 50,
                "negotiation": 20,
                "content": "\"shit fuck shit you b\"",
                "createdAt": null
        },
        "theirDetails": {
                "id": 22,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
            },

            "theirContent": {
                "id": 206,
                "negotiation": 3,
                "content": "\"shit shit shit\"",
                "createdAt": null
            },
        "youEditedLast": true
        },
        {
        "id": 90,
        "title": "Butt insurance",
        "description": "Butt butt butter butt",
        "yourDetails": {
                "id": 5,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
        },
        "yourContent": {
                "id": 90,
                "negotiation": 95,
                "content": "\"shit fuck shit you b\"",
                "createdAt": null
        },
        "theirDetails": {
                "id": 600,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
            },

            "theirContent": {
                "id": 6,
                "negotiation": 2,
                "content": "\"shit shit shit\"",
                "createdAt": null
            },
        "youEditedLast": true
        },
         {
        "id": 16,
        "title": "Butt insurance",
        "description": "Butt butt butter butt",
        "yourDetails": {
                "id": 2,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
        },
        "yourContent": {
                "id": 1,
                "negotiation": 2,
                "content": "\"shit fuck shit you b\"",
                "createdAt": null
        },
        "theirDetails": {
                "id": 2,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
            },

            "theirContent": {
                "id": 2,
                "negotiation": 2,
                "content": "\"shit shit shit\"",
                "createdAt": null
            },
        "youEditedLast": true
        },
        {
        "id": 10,
        "title": "Butt insurance",
        "description": "Butt butt butter butt",
        "yourDetails": {
                "id": 4,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
        },
        "yourContent": {
                "id": 50,
                "negotiation": 20,
                "content": "\"shit fuck shit you b\"",
                "createdAt": null
        },
        "theirDetails": {
                "id": 22,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
            },

            "theirContent": {
                "id": 206,
                "negotiation": 3,
                "content": "\"shit shit shit\"",
                "createdAt": null
            },
        "youEditedLast": true
        },
        {
        "id": 90,
        "title": "Butt insurance",
        "description": "Butt butt butter butt",
        "yourDetails": {
                "id": 5,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
        },
        "yourContent": {
                "id": 90,
                "negotiation": 95,
                "content": "\"shit fuck shit you b\"",
                "createdAt": null
        },
        "theirDetails": {
                "id": 600,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
            },

            "theirContent": {
                "id": 6,
                "negotiation": 2,
                "content": "\"shit shit shit\"",
                "createdAt": null
            },
        "youEditedLast": true
        },
         {
        "id": 16,
        "title": "Butt insurance",
        "description": "Butt butt butter butt",
        "yourDetails": {
                "id": 2,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
        },
        "yourContent": {
                "id": 1,
                "negotiation": 2,
                "content": "\"shit fuck shit you b\"",
                "createdAt": null
        },
        "theirDetails": {
                "id": 2,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
            },

            "theirContent": {
                "id": 2,
                "negotiation": 2,
                "content": "\"shit shit shit\"",
                "createdAt": null
            },
        "youEditedLast": true
        },
        {
        "id": 10,
        "title": "Butt insurance",
        "description": "Butt butt butter butt",
        "yourDetails": {
                "id": 4,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
        },
        "yourContent": {
                "id": 50,
                "negotiation": 20,
                "content": "\"shit fuck shit you b\"",
                "createdAt": null
        },
        "theirDetails": {
                "id": 22,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
            },

            "theirContent": {
                "id": 206,
                "negotiation": 3,
                "content": "\"shit shit shit\"",
                "createdAt": null
            },
        "youEditedLast": true
        },
        {
        "id": 90,
        "title": "Butt insurance",
        "description": "Butt butt butter butt",
        "yourDetails": {
                "id": 5,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
        },
        "yourContent": {
                "id": 90,
                "negotiation": 95,
                "content": "\"shit fuck shit you b\"",
                "createdAt": null
        },
        "theirDetails": {
                "id": 600,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
            },

            "theirContent": {
                "id": 6,
                "negotiation": 2,
                "content": "\"shit shit shit\"",
                "createdAt": null
            },
        "youEditedLast": true
        },
         {
        "id": 16,
        "title": "Butt insurance",
        "description": "Butt butt butter butt",
        "yourDetails": {
                "id": 2,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
        },
        "yourContent": {
                "id": 1,
                "negotiation": 2,
                "content": "\"shit fuck shit you b\"",
                "createdAt": null
        },
        "theirDetails": {
                "id": 2,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
            },

            "theirContent": {
                "id": 2,
                "negotiation": 2,
                "content": "\"shit shit shit\"",
                "createdAt": null
            },
        "youEditedLast": true
        },
        {
        "id": 10,
        "title": "Butt insurance",
        "description": "Butt butt butter butt",
        "yourDetails": {
                "id": 4,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
        },
        "yourContent": {
                "id": 50,
                "negotiation": 20,
                "content": "\"shit fuck shit you b\"",
                "createdAt": null
        },
        "theirDetails": {
                "id": 22,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
            },

            "theirContent": {
                "id": 206,
                "negotiation": 3,
                "content": "\"shit shit shit\"",
                "createdAt": null
            },
        "youEditedLast": true
        },
        {
        "id": 90,
        "title": "Butt insurance",
        "description": "Butt butt butter butt",
        "yourDetails": {
                "id": 5,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
        },
        "yourContent": {
                "id": 90,
                "negotiation": 95,
                "content": "\"shit fuck shit you b\"",
                "createdAt": null
        },
        "theirDetails": {
                "id": 600,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
            },

            "theirContent": {
                "id": 6,
                "negotiation": 2,
                "content": "\"shit shit shit\"",
                "createdAt": null
            },
        "youEditedLast": true
        }, {
        "id": 16,
        "title": "Butt insurance",
        "description": "Butt butt butter butt",
        "yourDetails": {
                "id": 2,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
        },
        "yourContent": {
                "id": 1,
                "negotiation": 2,
                "content": "\"shit fuck shit you b\"",
                "createdAt": null
        },
        "theirDetails": {
                "id": 2,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
            },

            "theirContent": {
                "id": 2,
                "negotiation": 2,
                "content": "\"shit shit shit\"",
                "createdAt": null
            },
        "youEditedLast": true
        },
        {
        "id": 10,
        "title": "Butt insurance",
        "description": "Butt butt butter butt",
        "yourDetails": {
                "id": 4,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
        },
        "yourContent": {
                "id": 50,
                "negotiation": 20,
                "content": "\"shit fuck shit you b\"",
                "createdAt": null
        },
        "theirDetails": {
                "id": 22,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
            },

            "theirContent": {
                "id": 206,
                "negotiation": 3,
                "content": "\"shit shit shit\"",
                "createdAt": null
            },
        "youEditedLast": true
        },
        {
        "id": 90,
        "title": "Butt insurance",
        "description": "Butt butt butter butt",
        "yourDetails": {
                "id": 5,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
        },
        "yourContent": {
                "id": 90,
                "negotiation": 95,
                "content": "\"shit fuck shit you b\"",
                "createdAt": null
        },
        "theirDetails": {
                "id": 600,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
            },

            "theirContent": {
                "id": 6,
                "negotiation": 2,
                "content": "\"shit shit shit\"",
                "createdAt": null
            },
        "youEditedLast": true
        },
         {
        "id": 16,
        "title": "Butt insurance",
        "description": "Butt butt butter butt",
        "yourDetails": {
                "id": 2,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
        },
        "yourContent": {
                "id": 1,
                "negotiation": 2,
                "content": "\"shit fuck shit you b\"",
                "createdAt": null
        },
        "theirDetails": {
                "id": 2,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
            },

            "theirContent": {
                "id": 2,
                "negotiation": 2,
                "content": "\"shit shit shit\"",
                "createdAt": null
            },
        "youEditedLast": true
        },
        {
        "id": 10,
        "title": "Butt insurance",
        "description": "Butt butt butter butt",
        "yourDetails": {
                "id": 4,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
        },
        "yourContent": {
                "id": 50,
                "negotiation": 20,
                "content": "\"shit fuck shit you b\"",
                "createdAt": null
        },
        "theirDetails": {
                "id": 22,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
            },

            "theirContent": {
                "id": 206,
                "negotiation": 3,
                "content": "\"shit shit shit\"",
                "createdAt": null
            },
        "youEditedLast": true
        },
        {
        "id": 90,
        "title": "Butt insurance",
        "description": "Butt butt butter butt",
        "yourDetails": {
                "id": 5,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
        },
        "yourContent": {
                "id": 90,
                "negotiation": 95,
                "content": "\"shit fuck shit you b\"",
                "createdAt": null
        },
        "theirDetails": {
                "id": 600,
                "legalName": "apple",
                "displayName": "apple computers",
                "email": "caca@caca.com",
                "address": "asdasdfsadf",
                "authorisation": null
            },

            "theirContent": {
                "id": 6,
                "negotiation": 2,
                "content": "\"shit shit shit\"",
                "createdAt": null
            },
        "youEditedLast": true
        }
            ]


### Create a New Negotiation [POST /negotiations]

Posts a new negotiation. Includes: title, description, counterparty ('partyB'), uploaded MarkDown
document ('content').

NOTE: required to pass a 'Bearer token' in the body which includes the logged
in party's specific id.

+ Request (application/json)

            {
                "title": "Large Crack Loan",
                "description": "Liquidity Injection to Facilitate Increased Crack Production",
                "partyB": 2,
                "content": "### This agreement is binding and has the full force of Mexican law"
            }

+ Response 201 (application/json)

    + Body

            {
                "id": 21,
                "title": "Large Crack Loan",
                "description": "Liquidity Injection to Facilitate Increased Crack Production",
                "partyB": 2,
                "partyA": 4,
                "latestProposerA": true,
                "aVersion": 61
            }


### publish new proposal to negotiation [POST /negotiations/publish/{negotiationId}]

Publishes changes made in the editor to the negotiation. By publishing your
latest proposal it be recorded in the db and your counterparty will now be
required to act.

The updated details of the specific negotiation are included in the response body.

Note: 1) required to pass a 'Bearer token' in the body which includes the logged
in party's specific id. 2) each time a publication is made there is a new version created in the
database.


+ Request (application/json)

    + Body

            {
                "dealAgreed": false,
                "content": "### Butt Insurance #### Parties Gabe Riera and Franz Spiess. Butt butt butt butt butt butt butt butter butt butter but butt butter but butt butt butter butt butter butter butt butt butt butt butt butt butter butt butter but butt butter but butt butt butter butt butter butter butt butt butt butt butt butt butter butt butter but butt butter but butt butt butter butt butter butter butt butt butt butt butt butt butter butt butter but butt butter but butt butt butter butt butter butter butt butt butt butt butt butt butter butt butter but butt butter but butt butt butter butt butter butter"
            }

+ Response 201 (application/json)

    + Body

            {
                "id": 3,
                "title": "Butt insurance",
                "description": "Butt butt butter butt",
                "partyA": 2,
                "partyB": 4,
                "aVersion": 63,
                "bVersion": 62,
                "latestProposerA": true
            }
