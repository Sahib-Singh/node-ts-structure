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

