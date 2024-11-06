import { check, validationResult } from 'express-validator';

export const userSignupValidator = [
    check('name')
        .notEmpty()
        .withMessage('Name is required'),
    check('email')
        .notEmpty()
        .withMessage('Email is required')
        .matches(/.+\@.+\..+/)
        .withMessage('Email must contain @')
        .isLength({ min: 4, max: 32 }),
    check('password')
        .notEmpty()
        .withMessage('Password is required')
        .isLength({ min: 8 })
        .withMessage('Password must contain at least 8 characters')
        .matches(/\d/)
        .withMessage('Password must contain a number'),
    
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const firstError = errors.array().map(error => error.msg)[0];
            return res.status(400).json({ error: firstError });
        }
        next();
    }
];
