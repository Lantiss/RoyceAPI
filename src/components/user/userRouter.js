
const userRouter = (router) => {
    router
        .post("/user")
        .get("/users")
        .get("/user/:id")
        .patch("/user/:id")
        .delete("/user/:id")
}

module.exports = { userRouter };