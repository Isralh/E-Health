// const users = []

/* add user */
exports.addUsers = (id, users = []) => {
  for (const user of id) {
    if (users.indexOf(user) < 0) {
      users.push(user)
    }
  }
  return users
}
/* remove user *

/* get user */

/* get users in the room */
