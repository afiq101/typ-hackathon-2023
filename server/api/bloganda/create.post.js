import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler (async(event) => {


    try {
        const { 
            blogName: title,
            blogContent: content,
            blogAuthor: author,
            blogTag: tag,
        } = await readBody(event);

if (!title || !author || !content || !tag) {
    return {
        statusCode : 400,
        message : "Title, content, author and tag are required",
    };
}

const insertBlog = await prisma.blog.create({
    data: {
        blogName: title,
        blogContent: content,
        blogAuthor: author,
        blogTag: tag,
    },
});

if (!insertBlog) {
    return {
        statusCode: 500,
        message: "Failed to save blog",
    
    };
}

return{
    statusCode: 200,
    message: "Successfully created blog",
};
    } catch (error) {
        console.log(error);
        return {
            statusCode: 500,
            message : "Server error",
        }
    }

});