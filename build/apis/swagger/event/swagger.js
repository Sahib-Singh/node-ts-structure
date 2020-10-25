"use strict";
/**
* @swagger
* /event:
*   get:
*     tags:
*       - Event APIS
*     summary: Get Event list
*     description: Get Event Details ...
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
* /event:
*   post:
*     tags:
*       - Event APIS
*     summary: Add Event
*     description: Add Event
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
*            title:
*              type: string
*              required: true
*            decription:
*              type: string
*              required: true
*            color:
*              type: string
*              required: true
*            picture:
*              type: string
*              required: true
*            startDate:
*              type: string
*              required: true
*            endDate:
*              type: string
*              required: true
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
* /event:
*   put:
*     tags:
*       - Event APIS
*     summary: Edit Event
*     description: Edit Event
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
*            eventId:
*              type: string
*              required: true
*              description: eventId is the ObjectId of event.
*            title:
*              type: string
*              required: true
*            decription:
*              type: string
*              required: true
*            color:
*              type: string
*              required: true
*            picture:
*              type: string
*              required: true
*            startDate:
*              type: string
*              required: true
*            endDate:
*              type: string
*              required: true
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
* /event:
*   patch:
*     tags:
*       - Event APIS
*     summary: Edit Event
*     description: Block or unblock event
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
*            eventId:
*              type: string
*              required: true
*              description: eventId is the ObjectId of event.
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
 * /event:
 *   delete:
 *     tags:
 *       - Event APIS
 *     summary: Delete Event
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