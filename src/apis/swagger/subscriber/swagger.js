/**
* @swagger
* /subscribers:
*   get:
*     tags:
*       - Subscriber APIS
*     summary: Get Subscriber list
*     description: Get Subscriber Details ...
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
* /subscribers:
*   post:
*     tags:
*       - Subscriber APIS
*     summary: Add Subscriber
*     description: Add Subscriber
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
* /subscribers:
*   put:
*     tags:
*       - Subscriber APIS
*     summary: Edit Subscriber
*     description: Edit Subscriber
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
*            subscriberId:
*              type: string
*              required: true
*              description: subscriberId is the ObjectId of subscriber.
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
* /subscribers:
*   patch:
*     tags:
*       - Subscriber APIS
*     summary: Edit Subscriber
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
*            subscriberId:
*              type: string
*              required: true
*              description: subscriberId is the ObjectId of subscriber.
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
 * /subscribers:
 *   delete:
 *     tags:
 *       - Subscriber APIS
 *     summary: Delete Subscriber
 *     descripion: Required ids in array
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Authorization
 *         description: token
 *         in: header
 *         required: false
 *       - name: body
 *         description: ids of the user
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