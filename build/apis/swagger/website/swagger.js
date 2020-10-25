"use strict";
/**
* @swagger
* /website/subscriber:
*   post:
*     tags:
*       - Website APIS
*     summary: Add Subscriber
*     description: Add Subscriber
*     produces:
*      - application/json
*     parameters:
*      - name: body
*        description: body
*        in: body
*        required: true
*        schema:
*          type: object
*          required: true
*          properties:
*            email:
*              type: string
*              required: true
*              description: userId is the ObjectId of user.
*     responses:
*       200:
*         description: Success
*       400:
*         description: Bad Request/Parameters
*       401:
*         description: Unauthorized
*       404:
*         description: Invalid url or Resource not found
*       500:
*         description: Internal server error
*/
/**
* @swagger
* /website/query:
*   post:
*     tags:
*       - Website APIS
*     summary: Add Query
*     description: Add Query
*     produces:
*      - application/json
*     parameters:
*      - name: body
*        description: body
*        in: body
*        required: true
*        schema:
*          type: object
*          required: true
*          properties:
*            name:
*              type: object
*              required: true
*              properties:
*                firstName:
*                  type: string
*                  required: true
*                  example: 'Sahib'
*                lastName:
*                  type: string
*                  required: true
*                  example: 'Singh'
*            contact:
*              type: object
*              required: true
*              properties:
*                email:
*                  type: string
*                  required: true
*                  example: 'Sahib'
*                phone:
*                  type: object
*                  required: true
*                  properties:
*                     dialCode:
*                         type: number
*                         required: true
*                     iso2:
*                         type: string
*                         required: true
*                     country:
*                         type: string
*                         required: true
*                     number:
*                         type: number
*                         required: true
*            occupation:
*              type: string
*              required: true
*              description: occupation of the query.
*            message:
*              type: string
*              required: true
*              description: message of the query.
*     responses:
*       200:
*         description: Success
*       400:
*         description: Bad Request/Parameters
*       401:
*         description: Unauthorized
*       404:
*         description: Invalid url or Resource not found
*       500:
*         description: Internal server error
*/
/**
* @swagger
* /website/blogs:
*   get:
*     tags:
*       - Website APIS
*     summary: Get Blog list
*     description: Get Blog Details ...
*     produces:
*       - application/json
*     parameters:
*       - name: pagination
*         description: If needed pagination then put it true else false
*         in: query
*         required: true
*       - name: page
*         description: Page number must be equeal or gereater then 1
*         in: query
*         required: false
*       - name: limit
*         description: Limit the record per api.
*         in: query
*         required: false
*       - name: search
*         description: search on title.
*         in: query
*         required: false
*     responses:
*       200:
*         description: Success
*       400:
*         description: Bad Request/Parameters
*       401:
*         description: Unauthorized
*       404:
*         description: Invalid url or Resource not found
*       500:
*         description: Internal server error
*/
/**
* @swagger
* /website/projects:
*   get:
*     tags:
*       - Website APIS
*     summary: Get Project list
*     description: Get Project Details ...
*     produces:
*       - application/json
*     parameters:
*       - name: pagination
*         description: If needed pagination then put it true else false
*         in: query
*         required: true
*       - name: page
*         description: Page number must be equeal or gereater then 1
*         in: query
*         required: false
*       - name: limit
*         description: Limit the record per api.
*         in: query
*         required: false
*       - name: search
*         description: search on title.
*         in: query
*         required: false
*     responses:
*       200:
*         description: Success
*       400:
*         description: Bad Request/Parameters
*       401:
*         description: Unauthorized
*       404:
*         description: Invalid url or Resource not found
*       500:
*         description: Internal server error
*/
/**
* @swagger
*
* /website/settings:
*   get:
*     tags:
*       - Website APIS
*     description: get Setting details without bearer token
*     summary: get Setting details
*     consumes:
*       - application/json
*     produces:
*       - application/json
*     responses:
*       200:
*         description: Setting object get
*       400:
*         description: Invalid Parameters
*       403:
*         description: Forbidden request
*       500:
*         description: Internal Server Error
*/
/**
* @swagger
*
* /website/countryCode:
*   get:
*     tags:
*       - Website APIS
*     description: get Country Code details without bearer token
*     summary: get Country Code details
*     consumes:
*       - application/json
*     produces:
*       - application/json
*     responses:
*       200:
*         description: Success
*       400:
*         description: Invalid Parameters
*       403:
*         description: Forbidden request
*       500:
*         description: Internal Server Error
*/
/**
* @swagger
* /website/forms/individual:
*   post:
*     tags:
*       - Website APIS
*     summary: Add Query
*     description: Add Query
*     produces:
*      - application/json
*     parameters:
*      - name: body
*        description: body
*        in: body
*        required: true
*        schema:
*          type: object
*          required: true
*          properties:
*            name:
*              type: object
*              required: true
*              properties:
*                firstName:
*                  type: string
*                  required: true
*                  example: 'Sahib'
*                lastName:
*                  type: string
*                  required: true
*                  example: 'Singh'
*            gender:
*              type: string
*              enum: ['FEMALE', 'MALE', 'OTHER']
*              required: true
*            dob:
*              type: string
*              required: true
*              description: Date of birth.
*            address:
*              type: object
*              required: true
*              properties:
*                streetAddress:
*                  type: string
*                  required: true
*                locality:
*                  type: string
*                  required: true
*                subLocality:
*                  type: string
*                  required: true
*                region:
*                  type: string
*                  required: true
*                country:
*                  type: string
*                  required: true
*                postalCode:
*                  type: string
*                  required: true
*                formattedAddress:
*                  type: string
*                  required: true
*                geo:
*                  type: array
*                  required: true
*                  minItems: 2
*                  items:
*                    type: number
*            contact:
*              type: object
*              required: true
*              properties:
*                email:
*                  type: string
*                  required: true
*                  example: 'Sahib'
*                phone:
*                  type: object
*                  required: true
*                  properties:
*                     dialCode:
*                         type: number
*                         required: true
*                     iso2:
*                         type: string
*                         required: true
*                     country:
*                         type: string
*                         required: true
*                     number:
*                         type: number
*                         required: true
*            otherDetails:
*              required: true
*              example: # Sample object
*                [{title: Some title, value: some value }]
*     responses:
*       200:
*         description: Success
*       400:
*         description: Bad Request/Parameters
*       401:
*         description: Unauthorized
*       404:
*         description: Invalid url or Resource not found
*       500:
*         description: Internal server error
*/
/**
* @swagger
* /website/forms/school:
*   post:
*     tags:
*       - Website APIS
*     summary: Add School Form
*     description: Add School Form
*     produces:
*      - application/json
*     parameters:
*      - name: body
*        description: body
*        in: body
*        required: true
*        schema:
*          type: object
*          required: true
*          properties:
*            orgName:
*              type: string
*              required: true
*            orgType:
*              type: string
*              enum: ['SCHOOL', 'INSTITUTION']
*              required: true
*            orgBelong:
*              type: string
*              required: true
*            address:
*              type: object
*              required: true
*              properties:
*                streetAddress:
*                  type: string
*                  required: true
*                locality:
*                  type: string
*                  required: true
*                subLocality:
*                  type: string
*                  required: true
*                region:
*                  type: string
*                  required: true
*                country:
*                  type: string
*                  required: true
*                postalCode:
*                  type: string
*                  required: true
*                formattedAddress:
*                  type: string
*                  required: true
*                geo:
*                  type: array
*                  required: true
*                  minItems: 2
*                  items:
*                    type: number
*            establishOn:
*              type: string
*              required: true
*            websiteUrl:
*              type: string
*              required: true
*            orgContact:
*              type: object
*              required: true
*              properties:
*                email:
*                  type: string
*                  required: true
*                  example: 'Sahib'
*                phone:
*                  type: object
*                  required: true
*                  properties:
*                     dialCode:
*                         type: number
*                         required: true
*                     iso2:
*                         type: string
*                         required: true
*                     country:
*                         type: string
*                         required: true
*                     number:
*                         type: number
*                         required: true
*            name:
*              type: object
*              required: true
*              properties:
*                firstName:
*                  type: string
*                  required: true
*                  example: 'Sahib'
*                lastName:
*                  type: string
*                  required: true
*                  example: 'Singh'
*            designation:
*              type: string
*              required: true
*            contact:
*              type: object
*              required: true
*              properties:
*                email:
*                  type: string
*                  required: true
*                  example: 'Sahib'
*                phone:
*                  type: object
*                  required: true
*                  properties:
*                     dialCode:
*                         type: number
*                         required: true
*                     iso2:
*                         type: string
*                         required: true
*                     country:
*                         type: string
*                         required: true
*                     number:
*                         type: number
*                         required: true
*     responses:
*       200:
*         description: Success
*       400:
*         description: Bad Request/Parameters
*       401:
*         description: Unauthorized
*       404:
*         description: Invalid url or Resource not found
*       500:
*         description: Internal server error
*/
/**
* @swagger
* /website/forms/corporate:
*   post:
*     tags:
*       - Website APIS
*     summary: Add Corporate Form
*     description: Add Corporate Form
*     produces:
*      - application/json
*     parameters:
*      - name: body
*        description: body
*        in: body
*        required: true
*        schema:
*          type: object
*          required: true
*          properties:
*            orgName:
*              type: string
*              required: true
*            orgType:
*              type: string
*              enum: ['GOVERNMENT', 'PRIVATE', 'NGO']
*              required: true
*            sectorType:
*              type: string
*              required: true
*            address:
*              type: object
*              required: true
*              properties:
*                streetAddress:
*                  type: string
*                  required: true
*                locality:
*                  type: string
*                  required: true
*                subLocality:
*                  type: string
*                  required: true
*                region:
*                  type: string
*                  required: true
*                country:
*                  type: string
*                  required: true
*                postalCode:
*                  type: string
*                  required: true
*                formattedAddress:
*                  type: string
*                  required: true
*                geo:
*                  type: array
*                  required: true
*                  minItems: 2
*                  items:
*                    type: number
*            establishOn:
*              type: string
*              required: true
*            websiteUrl:
*              type: string
*              required: true
*            orgContact:
*              type: object
*              required: true
*              properties:
*                email:
*                  type: string
*                  required: true
*                  example: 'Sahib'
*                phone:
*                  type: object
*                  required: true
*                  properties:
*                     dialCode:
*                         type: number
*                         required: true
*                     iso2:
*                         type: string
*                         required: true
*                     country:
*                         type: string
*                         required: true
*                     number:
*                         type: number
*                         required: true
*            name:
*              type: object
*              required: true
*              properties:
*                firstName:
*                  type: string
*                  required: true
*                  example: 'Sahib'
*                lastName:
*                  type: string
*                  required: true
*                  example: 'Singh'
*            designation:
*              type: string
*              required: true
*            contact:
*              type: object
*              required: true
*              properties:
*                email:
*                  type: string
*                  required: true
*                  example: 'Sahib'
*                phone:
*                  type: object
*                  required: true
*                  properties:
*                     dialCode:
*                         type: number
*                         required: true
*                     iso2:
*                         type: string
*                         required: true
*                     country:
*                         type: string
*                         required: true
*                     number:
*                         type: number
*                         required: true
*     responses:
*       200:
*         description: Success
*       400:
*         description: Bad Request/Parameters
*       401:
*         description: Unauthorized
*       404:
*         description: Invalid url or Resource not found
*       500:
*         description: Internal server error
*/
//# sourceMappingURL=swagger.js.map