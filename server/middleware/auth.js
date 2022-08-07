import jwt from "jsonwebtoken";

const auth = async(request, response, next) => {
    try {
        const token = request.headers.Authorization.split(" ")[1];
        let decodedToken;
        if(token){
            decodedToken = jwt.verify(token, "test");
            request.userId = decodedToken?.id;
        }
        next();
    } catch (error) {
        console.log(error);
    }
}
export default auth;