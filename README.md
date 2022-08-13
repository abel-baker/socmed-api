# Social media api

Deployed on heroku: https://tranquil-sierra-86798.herokuapp.com

## API routes currently accessible

get users: GET /api/users

get user: GET /api/users/:id

add user: POST /api/users
```json
{
  "username": "abel-baker",
  "email": "use-an@symb.ol"
}
```

update user: PUT /api/users/:id
```json
{
  "email": "update@example.li"
}
```

delete user: DELETE /api/users/:id

add friend: POST /api/users/:id/friends/:friendId

delete friend: DELETE /api/users/:id/friends/:friendId
