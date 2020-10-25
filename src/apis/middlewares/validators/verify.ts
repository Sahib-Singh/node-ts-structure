import { NextFunction } from 'express';


const getXuser = (req: any, res: any, next: NextFunction) => {
  try {
    const user = JSON.parse(req.headers['x-user'])
    if (typeof JSON.parse(req.headers['x-user']) === 'object') {
      req.user = user
      return next()
    } else
      return res.status(401).send({
        status: false,
        message: 'Unauthorised',
        data: null
      }) 
  } catch (error) {
    return res.status(error.message.match(/Unexpected token/) ? 400 : 500).send({
      status: false,
      message: error.message.match(/Unexpected token/)
        ? 'Unauthorised: X-USER not found.'
        : error.message,
      data: null
    })
  }
}

export default {
  getXuser
};