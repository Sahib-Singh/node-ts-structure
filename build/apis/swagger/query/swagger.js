"use strict";
/**
* @swagger
* /query:
*   get:
*     tags:
*       - Query APIS
*     summary: Get Query list
*     description: Get Query Details ...
*     produces:
*       - application/json
*     parameters:
*       - name: authorization
*         in: header
*         required: true
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
*         description: search on name.
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
* /query:
*   post:
*     tags:
*       - Query APIS
*     summary: Add Query
*     description: Add Query
*     produces:
*      - application/json
*     parameters:
*      - name: authorization
*        in: header
*        required: true
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
* /query:
*   put:
*     tags:
*       - Query APIS
*     summary: Edit Query
*     description: Edit Query
*     produces:
*      - application/json
*     parameters:
*      - name: authorization
*        in: header
*        required: true
*      - name: body
*        description: body
*        in: body
*        required: true
*        schema:
*          type: object
*          required: true
*          properties:
*            queryId:
*              type: string
*              required: true
*              description: subscriberId is the ObjectId of subscriber.
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
* /query:
*   patch:
*     tags:
*       - Query APIS
*     summary: Edit Query
*     description: Block or unblock subscriber
*     produces:
*      - application/json
*     parameters:
*      - name: authorization
*        in: header
*        required: true
*      - name: body
*        description: body
*        in: body
*        required: true
*        schema:
*          type: object
*          required: true
*          properties:
*            queryId:
*              type: string
*              required: true
*              description: queryId is the ObjectId of query.
*            isBlocked:
*              type: string
*              required: true
*              description: true for block false for unblock.
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
 * /query:
 *   delete:
 *     tags:
 *       - Query APIS
 *     summary: Delete Query
 *     descripion: Required ids in array
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Authorization
 *         description: token
 *         in: header
 *         required: false
 *       - name: body
 *         description: ids of the query
 *         in: body
 *         required: true
 *         example:
 *          ids:
 *           - 5ca82e0b79e5821a1cb5ed11
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